import styles from "./style.module.css";
import cn from "classnames";

type Props = {
  color?: string;
  fontSize?: string;
};

const Text: React.FC<Props> = ({ children, color, fontSize }) => {
    
  const classNameText = cn(
    `${styles.text}`,
    `${color ? styles[`color-${color}`] : null}`,
    `${fontSize ? styles[`font-size-${fontSize}`] : null}`
  );

  return <p className={classNameText}>{children}</p>;
};

export default Text;
