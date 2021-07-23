import PostPreview from "../PostPreview";
import Post from "../../types/post";
import styles from "./style.module.css";
type Props = {
  posts: Post[];
};

const PostAll = ({ posts }: Props) => {
  return (
    <section className={styles.postAll}>
      <h2>
        <span>Toda as postagens</span>
      </h2>
      <div>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            tags={post.tags}
            slug={post.slug}
            summary={post.summary}
            readTime={post.readTime}
          />
        ))}
      </div>
    </section>
  );
};

export default PostAll;
