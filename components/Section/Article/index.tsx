import markdownStyles from "./markdown-styles.module.css";
import styles from "./style.module.css";
import Container from "../../Container/";
type Props = {
  content: string;
  children?: React.ReactNode;
};

const Article = ({ content, children }: Props) => {
  if (children) {
    return (
      <article className={styles.section__article}>
        <Container>
          <div>{children}</div>
        </Container>
      </article>
    );
  } else {
    return (
      <article className={styles.section__article}>
        <Container>
          <div
            className={`${markdownStyles["markdown"]} ${markdownStyles["language-"]}`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Container>
      </article>
    );
  }
};

export default Article;
