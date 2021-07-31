
import PostMeta from "../PostMeta";
import Summary from "../Summary";
import styles from "./style.module.css";
type Props = {
  title: string;
  subtitle?: string;
  date: string;
  readTime: string;
  summary?: string;
  slug: string
};

const PostHeader = ({ slug, title, subtitle, date, readTime, summary }: Props) => {

  return (
    <header className={`${styles["post-header"]}`}>

      <div className={styles.content}>
        <h1>{title}</h1>

        <div className={styles["post-header__text"]}>
          <Summary>{summary ? summary : null}</Summary>
          {subtitle ? subtitle : null}
        </div>
        <div className={styles["post-header__meta"]}>
          <PostMeta slug={slug} views={{slug, observer: true}} date={date} readTime={readTime} />
        </div>
      </div>
    </header>
  );
};

export default PostHeader;