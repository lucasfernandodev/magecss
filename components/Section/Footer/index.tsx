import Container from '../../Container'
import styles from './style.module.css';
type Props = {
  children: React.ReactNode;
};

const Footer = ({ children }: Props) => {
  return (
    <footer className={styles.footer}>
      <Container>
        {children}
      </Container>
    </footer>
  )
};

export default Footer;
