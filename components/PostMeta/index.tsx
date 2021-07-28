import styles from "./style.module.css";
import DateFormatter from "../date-formatter";
import ViewCounter from "../ViewCounter";
import { useState } from "react";
import ButtonLike from "../ButtonLike";
import Label from "../Label";
type Props = {
  date: string;
  readTime?: string;
  likes?: true;
  views?: {
    slug: string;
    observer?: boolean;
  };
  slug: string;
};

const PostMeta = ({ date, readTime, likes, views, slug }: Props) => {
  const componentData = () => {
    return (
      <Label>
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
      </Label>
    );
  };

  const componentTime = () => {
    return (
      <p>
        <Label>
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
        </Label>
      </p>
    );
  };

  const [isLiked, setIsLiked] = useState(" ");

  return (
    <div className={styles["post-meta"]}>
      {date?.length >= 6 ? componentData() : null}
      {readTime ? componentTime() : null}
      {likes ? (
        <ButtonLike
          size="small"
          isLiked={isLiked}
          slug={slug}
          onClick={() => setIsLiked(isLiked == "like" ? "unlike" : "like")}
        />
      ) : null}
      {views ? (
        <ViewCounter
          slug={views.slug}
          observer={views.observer ? true : false}
        />
      ) : null}
    </div>
  );
};

export default PostMeta;
