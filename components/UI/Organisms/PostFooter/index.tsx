import styles from './style.module.css';

const PostFooter: React.FC<any> = ({children}) => {
  return (
    <footer className={styles.footer}>
        {children}
    </footer>
  )
};

export default PostFooter;
