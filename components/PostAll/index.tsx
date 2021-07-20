import PostPreview from "../post-preview";
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
            author={post.author}
            slug={post.slug}
            summary={post.summary}
          />
        ))}
      </div>
    </section>
  );
};

export default PostAll;
