import styles from "./style.module.css";
import DateFormatter from "../date-formatter";

type Props = {
  date: string;
  readTime: string;
};

const MetaPost = ({date, readTime }: Props) => {
  return (
    <p className={styles["meta-post"]}>
      <span>Publicado em </span>
      <span className={styles['meta-post__date']}>
      <DateFormatter dateString={date ? date : "2020-07-21"} />
      </span>
      <span className={styles['meta-post__separator']}>·</span>
      <span className={styles['meta-post__readTime']}>
      {`${readTime} min de leitura`}
      </span>
    </p>
  );
};

export default MetaPost;
