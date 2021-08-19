import Container from '../../Atoms/Container'
import styles from './style.module.css';
type Props = {
  children: React.ReactNode;
};

const PostFooter = ({ children }: Props) => {
  return (
    <footer className={styles.footer}>

        {children}

    </footer>
  )
};

export default PostFooter;
