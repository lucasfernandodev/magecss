import styles from "./style.module.css";
import PostStyle from "./post-styles.module.css";
import CardImage from "@/Molecules/CardImage";
import Container from "@/Atoms/Container";

import { useEffect, useState } from "react";
import Prism from "prismjs";


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
