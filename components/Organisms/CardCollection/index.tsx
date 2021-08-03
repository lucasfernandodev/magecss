import Title from "@/components/Atoms/Title";
import Container from "../../Atoms/Container";
import styles from "./style.module.css";
type Children = {
  title?: string;
  children: React.ReactNode;
  titleColor?: string;
};
const CardCollection = ({ children, title, titleColor }: Children) => {
  return (
    <section className={styles.cardCollection}>
      <Container>

        <div className={styles.cardCollection__header}>
        {title ? <Title variant="h2">{title}</Title> : null}
        </div>

        <div className={styles.cardCollection__content}>
          {children ? children : null}
        </div>
      </Container>
    </section>
  );
};

export default CardCollection;
