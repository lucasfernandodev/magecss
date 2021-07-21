import Brand from '../Brand';
import Navbar from "../Navbar";
import Container from "../Container";
import styles from "./style.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__content}>
          <Brand />
          <Navbar />
        </div>
      </Container>
    </header>
  );
}
