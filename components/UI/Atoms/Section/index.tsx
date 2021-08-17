import styles from "./style.module.css";
type Props = {
  children: React.ReactNode;
};

const Article = ({ children }: Props) => {
  return (
    <section className={styles.section}>
      {children}
    </section>
  );
};

export default Article;
