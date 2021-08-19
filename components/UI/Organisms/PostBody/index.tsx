import PostStyle from "./post-styles.module.css";
import styles from "./style.module.css";
import CardImage from "../../Molecules/CardImage";
import Prism from "prismjs";
import { useEffect, useState } from "react";
import Container from "../../Atoms/Container";
type Props = {
  content: string;
  thumbnail: string;
  title: string;
};

const PostBody = ({ content, thumbnail, title }: Props) => {
  const [post, setPost] = useState("loading...");
  useEffect(() => {
    function highlightCodeInHTML(html: string): string {
      const container = document.createElement("div");
      container.innerHTML = html; // unsafe but whatever

      Prism.highlightAllUnder(container);

      return container.innerHTML;
    }
    setPost(highlightCodeInHTML(content));
  }, [content]);

  return (
    <Container>
      <CardImage src={thumbnail} alt={title} />
      <article className={styles.section__article}>
        <div
          className={`${PostStyle["Article"]}`}
          dangerouslySetInnerHTML={{ __html: post }}
        />
      </article>
    </Container>
  );
};

export default PostBody;
