import styles from "./style.module.css";
import FeedMenContext from "@/components/Context/Feed";
import { useContext, useEffect, useState } from "react";
import PostType from "@/types/post";
import Title from "@/components/Atoms/Title";
import PostPreview from "@/Organisms/PostPreview";
import FeedMenu from "@/components/Molecules/FeedMenu";
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
  console.log(`Tab do Feed é ${Tab} e a lista de post -e =>>`, RenderPost);

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
              id={key}
              key={post.id}
              title={post.title}
              coverImage={post.feature_image}
              date={post.published_at}
              slug={post.slug}
              tags={post.tags}
              reading_time={post.reading_time}
            />
          ))}
      </article>
    </div>
  );
};

export default Feed;
