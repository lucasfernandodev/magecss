import Author from "../../../types/author";
import DateFormatter from "../../date-formatter";

import styles from "./style.module.css";

type Props = {
  title: string;
  subtitle?: string | undefined;
  coverImage?: string | undefined;
  date?: string | undefined;
  author?: Author;
  page?: boolean;
};

const Header = ({ title, subtitle, coverImage, date, author, page }: Props) => {
  if (page == true) {
    return (
      <header className={`${styles["section__header--page"]} ${styles.section__header}`}>
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
          <div className="post-author">
            <p>
              por
              <span className="post-author__name">
                {" "}
                {author ? author.name : "Erro ao buscar o nome do autor"}{" "}
              </span>
              em
              <span className="post-author__data">
                <DateFormatter dateString={date ? date : "2020-07-21"} />
              </span>
            </p>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
