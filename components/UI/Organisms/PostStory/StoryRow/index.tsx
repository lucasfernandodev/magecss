import styles from "./style.module.css";

import Link from "@/components/UI/Atoms/Link";
import CoverImage from "@/components/UI/Atoms/CoverImage";
import Tags from "@/components/UI/Molecules/Tags";
import PostMeta from "@/components/UI/Molecules/PostMeta";
import TagType from "@/types/tag";
import Title from "@/components/UI/Atoms/Title";
import Author from "@/components/UI/Molecules/Author";
import ButtonLike from "@/components/UI/Molecules/ButtonLike";
import ButtonComment from "@/components/UI/Molecules/ButtonComment";

type Data = {
  title: string;
  thumbnail: string;
  date: string;
  slug: string;
  tags: TagType[];
  reading_time?: number;
  featured?: boolean;
};

type StoryProps = {
  data: Data;
  type: string;
};

const StoryRow = ({ data }: StoryProps) => {
  const {
    title,
    thumbnail,
    date,
    slug,
    tags,
    reading_time,
    featured,
  } = data;

  return (
    <div className={styles.card}>
      <header className={styles["card-thumbnail"]}>
        {featured && <CoverImage slug={slug} title={title} src={thumbnail} />}
      </header>

      <section>
        <div className={styles.author}>
        <Author name="Lucas Fernando" data={date} />
        </div>
        
        <div className={styles.title}>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <Title variant={featured ? "h2" : "h3"} limited text={title} />
          </Link>
        </div>
      </section>

      <footer>
        <div className={styles.tags}>
          <Tags data={tags} limited />
        </div>
        <div className={styles.group_button}>
          <ButtonLike slug={slug} />
          <ButtonComment onClick={() => {}} />
        </div>

        <PostMeta slug={slug} reading_time={reading_time} />
      </footer>
    </div>
  );
};

export default StoryRow;
