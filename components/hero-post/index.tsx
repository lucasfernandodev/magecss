import DateFormatter from "../date-formatter";
import CoverImage from "../cover-image";
import Link from "next/link";
import Author from "../../types/author";
import styles from "./style.module.css";
import MetaPost from "../meta-post";
type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  readTime: string;
  slug: string;
};

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  readTime,
  slug,
}: Props) => {
  return (
    <section className={styles.heroPost}>
      <div className={styles.heroPost__thumbnail}>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>

      <div className={styles.heroPost__header}>
        <span className={styles.heroPost__tag}>Último Artigo</span>

        <h2 className={styles.heroPost__title}>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a>{title}</a>
          </Link>
        </h2>

        <p className={styles.heroPost__summary}>{excerpt}</p>

        <MetaPost date={date} readTime={readTime} />
      </div>
    </section>
  );
};

export default HeroPost;
