import Link from "next/link";
import CoverImage from "../cover-image";
import styles from "./style.module.css";
import Tags from "../Tags";
import PostMeta from "../PostMeta";
import Summary from "../Summary";
import Title from "../Title";

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

      <div className={styles["card__tags"]}>
        <Tags tags={tagsToArray} />
      </div>

      <div className={styles["card__content"]}>
        <h3>
          <Title>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              {title}
            </Link>
          </Title>
        </h3>

        <Summary limitRow={3}>{summary}</Summary>
        <PostMeta date={date} readTime={readTime} />
      </div>
    </div>
  );
};

export default PostPreview;
