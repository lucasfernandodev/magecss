import styles from "./style.module.css";

type Props = {
  children: React.ReactNode;
  limitRow?: number;
};

const Summary = ({ children, limitRow }: Props) => {
  if (children == "") {
    return null;
  }

  if (limitRow) {
    return (
      <p data-row={3} className={`${styles.summary} ${styles["summary--limitRow"]}`}
      >
        {children}
      </p>
    );
  } else {
    return <p className={styles.summary}>{children}</p>;
  }
};

export default Summary;
