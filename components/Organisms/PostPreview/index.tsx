import Link from "next/link";
import CoverImage from "../../Atoms/CoverImage";
import styles from "./style.module.css";
import Tags from "../../Molecules/Tags";
import PostMeta from "../../Molecules/PostMeta";
import Summary from "../../Atoms/Summary";
import Title from "../../Atoms/Title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  summary: string;
  slug: string;
  tags: string;
  readTime: string;
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
    <div className={styles["card"]}>
      <div className={styles["card__thumbnail"]}>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>

      <div className={styles["card__content"]}>
        <Tags tags={tagsToArray} limitTags={3} />

        <Title variant="h3" lineOverflow={2}>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            {title}
          </Link>
        </Title>

        <Summary limitRow={3}>{summary}</Summary>

        <div className={styles["card__footer"]}>
     
          <PostMeta slug={slug} date={date} readTime={readTime} />
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
