import CoverImage from "../cover-image";
import Link from "next/link";
import Tags from '../tags';
import styles from "./style.module.css";
import MetaPost from "../meta-post";
import Summary from "../Summary";
type Props = {
  title: string;
  coverImage: string;
  date: string;
  summary: string;
  readTime: string;
  slug: string;
  tags: string
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

  const tagsToArray = tags.split(' ');

  return (
    <section className={styles.heroPost}>

      <div className={styles.heroPost__thumbnail}>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>

      <div className={styles.heroPost__header}>
        <span className={styles.heroPost__tag}>
          <span>Último Artigo</span>
          <Tags tags={tagsToArray} limitTags={3}/>
          </span>

        <h2 className={styles.heroPost__title}>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a>{title}</a>
          </Link>
        </h2>

        <Summary>
          {summary}
        </Summary>

        <MetaPost date={date} readTime={readTime} />
      </div>
    </section>
  );
};

export default HeroPost;
