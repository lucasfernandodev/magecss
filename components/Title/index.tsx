import styles from "./style.module.css";

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return <div className={styles.title}>{children}</div>;
};

export default Title;
