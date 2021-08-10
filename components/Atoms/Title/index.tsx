import styles from "./style.module.css";
import CSS from "csstype";
import Box from "../Box";
type Props = {
  children: React.ReactNode;
  variant: string;
  lineOverflow?: number;
};

const Title = ({ children, variant, lineOverflow }: Props) => {
  
  const LimitWrap: CSS.Properties = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: lineOverflow ?? 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: "max-content",
    color: "var(--color-primary)",
  };

  const unlimitedLine: CSS.Properties = {
    color: "var(--color-title)",
  };

  return (

    <div
      className={styles.title}
      style={lineOverflow ? LimitWrap : unlimitedLine}
    >
      {variant === "h1" ? (
        <h1 className={styles.title__item}>{children}</h1>
      ) : null}
      {variant === "h2" ? (
        <h2 className={styles.title__item}>{children}</h2>
      ) : null}
      {variant === "h3" ? (
        <h3 className={styles.title__item}>{children}</h3>
      ) : null}
      {variant === "h4" ? (
        <h4 className={styles.title__item}>{children}</h4>
      ) : null}
      {variant === "h5" ? (
        <h5 className={styles.title__item}>{children}</h5>
      ) : null}
      {variant === "h6" ? (
        <h6 className={styles.title__item}>{children}</h6>
      ) : null}
    </div>
  );
};

export default Title;
