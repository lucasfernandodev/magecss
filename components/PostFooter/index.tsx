import Container from '../Layout/Container'
import styles from './style.module.css';
type Props = {
  children: React.ReactNode;
};

const PostFooter = ({ children }: Props) => {
  return (
    <footer className={styles.footer}>
      <Container>
        {children}
      </Container>
    </footer>
  )
};

export default PostFooter;
