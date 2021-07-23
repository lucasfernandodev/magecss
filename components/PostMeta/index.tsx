import styles from "./style.module.css";
import DateFormatter from "../date-formatter";

type Props = {
  date: string;
  readTime?: string;
  likes?: number;
  views?: number;
};

const PostMeta = ({ date, readTime, likes, views }: Props) => {
  const componentData = () => {
    return (
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <rect x="4" y="5" width="16" height="16" rx="2"></rect>
          <line x1="16" y1="3" x2="16" y2="7"></line>
          <line x1="8" y1="3" x2="8" y2="7"></line>
          <line x1="4" y1="11" x2="20" y2="11"></line>
          <rect x="8" y="15" width="2" height="2"></rect>
        </svg>
        <span>
          Publicado em <DateFormatter dateString={date} />
        </span>
      </p>
    );
  };

  const componentTime = () => {
    return (
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="12" r="9"></circle>
          <polyline points="12 7 12 12 15 15"></polyline>
        </svg>
        <span>{` ${readTime} min de leitura`}</span>
      </p>
    );
  };

  const componentLikes = () => {
    return (
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
        <span>4 Curtidas</span>
      </p>
    );
  };

  const componentViews = () => {
    return (
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
        </svg>
        <span>110 Visualizações</span>
      </p>
    );
  };

  return (
    <div className={styles["post-meta"]}>
      {date?.length >= 6 ? componentData() : null}
      {readTime ? componentTime() : null}
      {likes ? componentLikes() : null}
      {views ? componentViews() : null}
    </div>
  );
};

export default PostMeta;
