import Author from "../../types/author";
import DateFormatter from "../date-formatter";

import styles from './style.module.css';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <div className={styles.postHeader}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <div className="post-author">
          <p>
            por
            <span className="post-author__name"> {author.name} </span>
            em
            <span className="post-author__data">
              <DateFormatter dateString={date} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
