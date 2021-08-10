import styles from "./style.module.css";

import Post from "@/types/post";
import Title from "@/components/Atoms/Title";
import PostPreview from "@/Organisms/PostPreview";
import FeedMenu from "@/components/Molecules/FeedMenu";

type FeedType = {
  listPost: Post[];
  title?: string;
  template?: string;
};

const Feed = ({ listPost, title, template }: FeedType) => {
  return (
    <div className={styles.feed} data-template={template}>
      <header>
        {title ? <Title variant="h3">{title}</Title> : null}
        {template == "feed" ? <FeedMenu /> : null}
      </header>
      <article>
        {listPost.map((post, key) => (
          <PostPreview
            id={key}
            key={key}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            tags={post.tags}
            readTime={post.readTime}
          />
        ))}
      </article>
    </div>
  );
};

export default Feed;
