import styles from "./style.module.css";
import Avatar from "@/components/UI/Atoms/Avatar";
import DataFormatter from "@/components/UI/Atoms/DateFormatter";

type AuthorProp = {
  src?: string;
  name: string;
  data?: string;
  large?: boolean;
};

const Author = ({ name, data, large }: AuthorProp) => {
  const subtitle =
    "Dev Apaixonado por Tecnologia & Educação! Evolua rápido como a tecnologia, aprendizado é contínuo e sempre haverá um próximo nível. Boost Yourself! 🚀";

  const pathImage = "/assets/author/lucas-transparent.png";

  const PostAuthor = (
    <div className={styles.postAuthor}>
      <div className={styles["postauthor__avatar"]}>
        <Avatar src={pathImage} name={name} size={98} />
      </div>
      <div className={styles["postauthor__Content"]}>
        <span className={`${styles.author_name}`}>{name}</span>
        <span className="author-data-post">{subtitle}</span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/lucasfernandodev/"
          className={styles.button}
        >
          Seguir
        </a>
      </div>
    </div>
  );

  const StoreAuthor = (
    <div className={styles["author"]}>
      <div className={styles["author-image"]}>
        <Avatar src={pathImage} name={name} />
      </div>
      <div className={styles["author-info"]}>
        <span className="author-name">{name}</span>
        <span className="author-data-post">
          {data ? <DataFormatter dateString={data} /> : "Erro post sem data"}
        </span>
      </div>
    </div>
  );

  return (
    <>
      {large && PostAuthor}
      {!large && StoreAuthor}
    </>
  );
};

export default Author;
