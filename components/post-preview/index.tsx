import DateFormatter from "../date-formatter";
import CoverImage from "../cover-image";
import Link from "next/link";
import Author from "../../types/author";
import styles from "./style.module.css";
type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className={styles.postPreview}>
      <div className={styles.cardImage}>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className={styles.content}>
        <h3>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a>{title}</a>
          </Link>
        </h3>
        <p>
          {excerpt}
        </p>
        <div className="hero-post__author">
            <p>
              por
              <span className="hero-post__author-name"> {author.name} </span>
              em
              <span className="hero-post__data">
                <DateFormatter dateString={date} />
              </span>
            </p>
          </div>
      </div>
    </div>
  );
};

export default PostPreview;
