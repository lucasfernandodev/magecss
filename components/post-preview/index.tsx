import CoverImage from "../cover-image";
import Link from "next/link";
import styles from "./style.module.css";
import Tags from "../tags";
import MetaPost from "../meta-post";
import Summary from "../Summary";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  summary: string;
  slug: string;
  tags: string;
  readTime: string
};

const PostPreview = ({
  title,
  coverImage,
  date,
  summary,
  readTime,
  slug,
  tags,
}: Props) => {
  const tagsToArray = tags.split(" ");

  return (
    <div className={styles['post-preview']}>
      <div className={styles.cardImage}>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className={styles.cardTags}>
        <Tags tags={tagsToArray} />
      </div>
      <div className={styles.content}>
        <h3>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a>{title}</a>
          </Link>
        </h3>

        <Summary limitRow={3}>{summary}</Summary>
        <MetaPost date={date} readTime={readTime} Simplify={true} />
      </div>
    </div>
  );
};

export default PostPreview;
