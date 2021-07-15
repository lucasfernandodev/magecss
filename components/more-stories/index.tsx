import PostPreview from "../post-preview";
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
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
