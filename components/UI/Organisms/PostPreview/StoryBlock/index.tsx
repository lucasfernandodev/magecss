import styles from "./style.module.css";

import Link from "@/components/UI/Atoms/Link";
import CoverImage from "@/components/UI/Atoms/CoverImage";
import Tags from "@/components/UI/Molecules/Tags";
import PostMeta from "@/components/UI/Molecules/PostMeta";
import TagType from "@/types/tag";
import Title from "@/components/UI/Atoms/Title";
import Author from "@/components/UI/Molecules/Author";
import cn from "classnames";

type Data = {
  title: string;
  thumbnail: string;
  date: string;
  slug: string;
  tags: TagType[];
  reading_time?: number;
  layout: Extract<"row" | "block", string>;
  excerpt?: string;
  featured?: boolean;
};

type StoryProps = {
  data: Data;
  type: string;
};

const StoryBlock = ({data}: StoryProps) => {

  const { title, thumbnail, date, slug, tags, reading_time, layout, excerpt, featured} = data;


  return (
    <div className={styles.card}>
      <header className={styles["card-thumbnail"]}>
        <CoverImage slug={slug} title={title} src={thumbnail} />
      </header>

      <section>
        <div className={styles.tags}>
          <Tags data={tags} limitTags={3} />
        </div>

        <div className={styles.title}>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <Title variant="h3" limited text={title} />
        </Link>
        </div>

        <div className={styles.summary}>
          {excerpt && excerpt}
        </div>
      </section>

      <footer>
          <Author name="Lucas Fernando" data={date} />
          <PostMeta slug={slug} reading_time={reading_time} />
      </footer>
    </div>
  );
};

export default StoryBlock;
