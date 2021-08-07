import styles from "./style.module.css";
import Avatar from "@/Atoms/Avatar";
import DataFormatter from "@/Atoms/DateFormatter";
type AuthorProp = {
  src: string;
  name: string;
  data?: string;
  subtitle?: string;
  large?: boolean;
};

const Author = ({ src, name, data, subtitle, large }: AuthorProp) => {
  return (
    <>
      {large && (
        <div className={styles.postAuthor}>
        <div className={styles["postauthor__avatar"]}>
          <Avatar src={src} name={name} size={98}/>
        </div>
        <div className={styles["postauthor__Content"]}>
          <span className="author-name">{name}</span>
          <span className="author-data-post">
            {subtitle ? subtitle : 'Erro subtitle não informado'}
          </span>
        </div>
      </div>
      )}
      {!large && (
        <div className={styles["author"]}>
          <div className={styles["author-image"]}>
            <Avatar src={src} name={name} />
          </div>
          <div className={styles["author-info"]}>
            <span className="author-name">{name}</span>
            <span className="author-data-post">
              {data ? (
                <DataFormatter dateString={data} />
              ) : (
                "Erro post sem data"
              )}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Author;
