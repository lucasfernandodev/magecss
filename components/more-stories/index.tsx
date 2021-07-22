import PostPreview from "../PostPreview";
import Post from "../../types/post";
import styles from "./style.module.css";
type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section className={styles.moreStore}>
      <h2>
        <span>Postagens Recentes</span>
      </h2>
      <div>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            summary={post.summary}
            tags={post.tags}
            readTime={post.readTime}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
