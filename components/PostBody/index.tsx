import markdownStyles from "./markdown-styles.module.css";
import styles from "./style.module.css";
import Container from "../Layout/Container";
import CardImage from "../CardImage";
type Props = {
  content: string;
  children?: React.ReactNode;
  thumbnail: string;
  title: string;
};

const PostBody = ({ content, children, thumbnail, title }: Props) => {
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
      <>
        <CardImage src={thumbnail} alt={title}/>
        <article className={styles.section__article}>
          <div
            className={`${markdownStyles["markdown"]} ${markdownStyles["language-"]}`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </>
    );
  }
};

export default PostBody;
