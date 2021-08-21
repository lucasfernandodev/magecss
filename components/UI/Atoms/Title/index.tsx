import styles from "./style.module.css";
import cn from "classnames";

type Props = {
  text?: string;
  variant: Extract<"h1" | "h2" | "h3" | "h4" | "h5" | "h6", string>;
  limited?: boolean;
};

const Title: React.FC<Props> = ({ text, children, variant, limited }) => {

  let Text;

  const TextAtribute = text && typeof(text) !== 'undefined' ? text : null;
  const Children = children && typeof(children) !== 'undefined' ? children : null;


  if(TextAtribute !== null && Children !== null){
    Text = `${TextAtribute} ${Children}`;
  }

  if(TextAtribute !== null && Children === null){
    Text = TextAtribute;
  }

  if(Children !== null && TextAtribute === null){
    Text = Children;
  }


  const classNameTitle = cn(`${styles.title}`, {
    limited: typeof limited == "undefined" ? true : false,
  });

  return (
    <div className={classNameTitle}>
      {variant === "h1" && <h1 className={styles.title__item}>{Text}</h1>}
      {variant === "h2" && <h2 className={styles.title__item}>{Text}</h2>}
      {variant === "h3" && <h3 className={styles.title__item}>{Text}</h3>}
      {variant === "h4" && <h4 className={styles.title__item}>{Text}</h4>}
      {variant === "h5" && <h5 className={styles.title__item}>{Text}</h5>}
      {variant === "h6" && <h6 className={styles.title__item}>{Text}</h6>}
    </div>
  );
};

export default Title;
