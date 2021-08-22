import styles from "./style.module.css";
type Props = {
  children: React.ReactNode;
};

const Section = ({ children }: Props) => {
  return (
    <section className={styles.section}>
      {children}
    </section>
  );
};

export default Section;
