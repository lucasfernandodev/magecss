import Brand from '../../Brand';
import Navbar from "../../Navbar";
import Container from "../Container";
import styles from "./style.module.css";

type Props = {
  bg?: string
}

export default function PageHeader({bg} : Props) {
  return (
    <header className={`${styles.header} ${bg == 'primary' ? styles['header--primary'] : ''}`}>
      <Container alignY="center" alignX="space-between">
          <Brand />
          <Navbar />
      </Container>
    </header>
  );
}
