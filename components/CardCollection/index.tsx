import styles from "./style.module.css";
type Children = {
  title?: string;
  children: React.ReactNode;
  titleColor?: string;
};
const CardCollection = ({ children, title, titleColor }: Children) => {
  return (
    
    <section className={styles.cardCollection}>
      {title ? (
        <h2 className={styles.cardCollection__header}>
          <span
            className={`${styles.cardCollection__title} ${
              titleColor ? styles[`${titleColor}`] : ""
            }`}
          >
            {title}
          </span>
        </h2>
      ) : null}

      <div className={styles.cardCollection__content}>
        {children ? children : null}
      </div>
    </section>
  );
};

export default CardCollection;
