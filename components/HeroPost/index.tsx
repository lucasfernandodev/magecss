import CoverImage from "../cover-image";
import Link from "next/link";
import Tags from "../Tags";
import styles from "./style.module.css";
import PostMeta from "../PostMeta";
import Summary from "../Summary";
import Title from "../Title";
type Props = {
  title: string;
  coverImage: string;
  date: string;
  summary: string;
  readTime: string;
  slug: string;
  tags: string;
};

const HeroPost = ({
  title,
  tags,
  coverImage,
  date,
  summary,
  readTime,
  slug,
}: Props) => {
  const tagsToArray = tags.split(" ");

  return (
    <section className={styles.heroPost}>
      <div className={styles.heroPost__thumbnail}>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>

      <div className={styles.heroPost__header}>
        <span className={styles.heroPost__tag}>
          <span>Último Artigo</span>
          <Tags tags={tagsToArray} limitTags={3} />
        </span>

        <h2 className={styles.heroPost__title} title={title}>
          <Title>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              {title}
            </Link>
          </Title>
        </h2>

        <Summary>{summary}</Summary>

        <PostMeta date={date} readTime={readTime} likes={34} views={18} />
      </div>
    </section>
  );
};

export default HeroPost;
