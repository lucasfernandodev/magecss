import Author from "../../../types/author";
import MetaPost from "../../meta-post";
import styles from "./style.module.css";

type Props = {
  title: string;
  subtitle?: string;
  coverImage?: string;
  date?: string;
  page?: boolean;
  readTime?: string;
  summary?: string;
};

const Header = ({
  title,
  subtitle,
  coverImage,
  date,
  page,
  readTime,
  summary,
}: Props) => {
  if (page == true) {
    return (
      <header
        className={`${styles["section__header--page"]} ${styles.section__header}`}
      >
        <div className={styles.content}>
          <h1>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </header>
    );
  } else {
    return (
      <header
        className={`${styles["section__header--post"]} ${styles.section__header}`}
      >
        <div className={styles.content}>
          <h1>{title}</h1>
          <p className={styles.subtitle}>
            {summary}
          </p>

            <MetaPost
              date={date ? date : "0000-01-01"}
              readTime={readTime ? readTime : "sem tempo"}
            />

        </div>
      </header>
    );
  }
};

export default Header;
