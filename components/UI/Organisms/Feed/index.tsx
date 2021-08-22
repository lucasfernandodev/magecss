import styles from "./style.module.css";
import FeedMenContext from "@/components/Context/Feed";
import { useContext } from "react";
import PostType from "@/types/post";
import Title from "@/components/UI/Atoms/Title";
import PostPreview from "@/components/UI/Organisms/PostStory";
import FeedMenu from "@/components/UI/Molecules/FeedMenu";
import useSWR from "swr";

type FeedType = {
  listPost: PostType[];
  title?: string;
  template?: string;
};

async function fetcher(...args: [string]) {
  const res = await fetch(...args);
  return res.json();
}

const Feed = ({ listPost, title, template }: FeedType) => {
  const { Tab } = useContext(FeedMenContext);
  const { data } = useSWR(`/api/views/search`, fetcher);

  const viewsData = data?.result || null;


  const populatingViewsInPost = listPost.map((post) => {
    if (viewsData !== null) {
      post.views =
        typeof viewsData[post.slug] !== "undefined"
          ? viewsData[post.slug]
          : (post.views = 0);
      return post;
    } else {
      post.views = 0;
      return post;
    }
  });

  
  const sortingPostList = populatingViewsInPost.sort((a, b) => {
        const itemA = a.views ? a.views : 0;
        const itemB = b.views ? b.views : 0;
        return itemB - itemA;
  });


  const RenderPost = Tab == "Feed" ? listPost : sortingPostList;

  return (
    <div className={styles.feed} data-template={template}>
      <header>
        {title ? <Title variant="h3">{title}</Title> : null}
        {template == "feed" ? <FeedMenu /> : null}
      </header>
      <article>
        {RenderPost &&
          RenderPost.map((post, key) => (
            <PostPreview
              key={post.id}
              title={post.title}
              thumbnail={post.feature_image}
              date={post.published_at}
              slug={post.slug}
              tags={post.tags}
              reading_time={post.reading_time}
              layout="row"
              featured={key === 0 ? true : false}
            />
          ))}
      </article>
    </div>
  );
};

export default Feed;
