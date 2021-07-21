import styles from "./style.module.css";
import DateFormatter from "../date-formatter";

type Props = {
  date: string;
  readTime: string;
  Simplify?: boolean;
};

const MetaPost = ({ date, readTime, Simplify }: Props) => {
  if (Simplify == true) {
    return (
      <div className={`${styles["meta-post"]}`}>
        <p className={styles["meta-post__item"]}>
          <span className={styles["meta-post__icon"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              stroke-width="1.75"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="5" width="16" height="16" rx="2"></rect>
              <line x1="16" y1="3" x2="16" y2="7"></line>
              <line x1="8" y1="3" x2="8" y2="7"></line>
              <line x1="4" y1="11" x2="20" y2="11"></line>
              <rect x="8" y="15" width="2" height="2"></rect>
            </svg>
          </span>
          <span>Publicado em </span>
          <span className={styles["meta-post__date"]}>
            <DateFormatter dateString={date ? date : "2020-07-21"} />
          </span>
        </p>
        <p className={styles["meta-post__item"]}>
          <span className={styles["meta-post__icon"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              stroke-width="1.75"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <polyline points="12 7 12 12 15 15"></polyline>
            </svg>
          </span>
          <span>{` ${readTime} min de leitura`}</span>
        </p>
      </div>
    );
  }
  return (
    <>
      <div className={`${styles["meta-post"]}`}>
        <p className={styles["meta-post__item"]}>
          <span className={styles["meta-post__icon"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              stroke-width="1.75"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="5" width="16" height="16" rx="2"></rect>
              <line x1="16" y1="3" x2="16" y2="7"></line>
              <line x1="8" y1="3" x2="8" y2="7"></line>
              <line x1="4" y1="11" x2="20" y2="11"></line>
              <rect x="8" y="15" width="2" height="2"></rect>
            </svg>
          </span>
          <span>Publicado em </span>
          <span className={styles["meta-post__date"]}>
            <DateFormatter dateString={date ? date : "2020-07-21"} />
          </span>
        </p>
        <p className={styles["meta-post__item"]}>
          <span className={styles["meta-post__icon"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              stroke-width="1.75"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <polyline points="12 7 12 12 15 15"></polyline>
            </svg>
          </span>
          <span>{` ${readTime} min de leitura`}</span>
        </p>
      </div>
      <div className={styles["meta-post__separator"]}></div>
      <div className={styles["meta-post-more"]}>
        <p className={styles["meta-post__item"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
          <span>4 Curtidas</span>
          <span className={styles["meta-post__separator"]}> </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke-width="1.75"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="2"></circle>
            <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
          </svg>
          <span>110 Visualizações</span>
        </p>

      </div>
    </>
  );
};

export default MetaPost;
