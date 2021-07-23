import PostMeta from "../PostMeta";
import Summary from "../Summary";
import styles from "./style.module.css";

type Props = {
  title: string;
  subtitle?: string;
  date: string;
  readTime: string;
  summary?: string;
};

const PostHeader = ({ title, subtitle, date, readTime, summary }: Props) => {


  
  return (
    <header className={`${styles["post-header"]}`}>

      <div className={styles.content}>

        <h1>{title}</h1>

        <div className={styles["post-header__text"]}>
          <Summary>{summary ? summary : null}</Summary>
          {subtitle ? subtitle : null}
        </div>
        <div className={styles["post-header__meta"]}>
          <PostMeta date={date} readTime={readTime} />
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
