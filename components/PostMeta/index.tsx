import styles from "./style.module.css";
import ViewCounter from "../Utils/ViewCounter";
import { useState } from "react";
import ButtonLike from "../Utils/ButtonLike";
import ReadTime from "../Utils/ReadTime";
import PublishTime from '../Utils/PublishTime';
type Props = {
  date: string;
  readTime: string;
  likes?: true;
  views?: {
    slug: string;
    observer?: boolean;
  };
  slug: string;
};

const PostMeta = ({ date, readTime, likes, views, slug }: Props) => {

  const [isLiked, setIsLiked] = useState(" ");

  return (
    <div className={styles["post-meta"]}>
      <p>
      {date?.length >= 6 ? <PublishTime data={date}/> : null}
      {readTime ? (<ReadTime time={readTime} />) : null}
      </p>
      <p>
      {views ? ( <ViewCounter slug={views.slug} observer={views.observer ? true : false} /> ) : null}
      {likes ? ( <ButtonLike size="small" isLiked={isLiked} slug={slug} onClick={() => setIsLiked(isLiked == "like" ? "unlike" : "like")} /> ) : null}
      </p>
    </div>
  );
};

export default PostMeta;
