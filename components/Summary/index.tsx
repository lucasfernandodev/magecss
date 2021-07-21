import styles from "./style.module.css";

type Props = {
  children: React.ReactNode;
  limitRow?: number;
};

const Summary = ({ children, limitRow }: Props) => {
  if (limitRow) {
    return <p data-Row={3} className={`${styles.summary} ${styles['summary--limitRow']}`}>{children}</p>;
  } else {
    return <p className={styles.summary}>{children}</p>;
  }
};

export default Summary;
