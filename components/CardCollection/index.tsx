
import styles from "./style.module.css";
type Children = {
    title: string
    children: React.ReactNode;
}
const CardCollection = ({ children , title}: Children) => {
  return (
    <section className={styles.cardCollection}>
      <h2 className={styles.cardCollection__header}>
        <span className={styles.cardCollection__title}>{title}</span>
      </h2>
      <div className={styles.cardCollection__content}>
        {children ? children : null}
      </div>
    </section>
  );
};

export default CardCollection;
