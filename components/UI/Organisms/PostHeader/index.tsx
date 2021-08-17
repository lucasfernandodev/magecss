import PostMeta from "../../Molecules/PostMeta";
import Summary from "../../Atoms/Summary";
import styles from "./style.module.css";
import Title from "@/components/UI/Atoms/Title";
type Props = {
  title: string;
  subtitle?: string;
  date: string;
  readTime?: string;
  summary?: string;
  slug: string;
};

const PostHeader = ({
  slug,
  title,
  subtitle,
  date,
  readTime,
  summary,
}: Props) => {
  return (
    <header className={`${styles["post-header"]}`}>
      <div className={styles.content}>
        <Title variant="h1">{title}</Title>

        <div className={styles["post-header__text"]}>
          <Summary>{summary ? summary : null}</Summary>
          {subtitle ? subtitle : null}
        </div>
        
        <div className={styles["post-header__meta"]}>
          <PostMeta
            slug={slug}
            views={{ slug, observer: true }}
            date={date}
            // readTime={readTime}
          />
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
