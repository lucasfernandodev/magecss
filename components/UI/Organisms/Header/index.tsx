import styles from "./style.module.css";

type Props = {
  align?: string;
};

const Header : React.FC<Props> = ({ children, align }) => {
  return (
    <header className={styles.header}>
      <div className={`${styles.content} ${align ? styles[`${align}`] : null}`}>
        {children}
      </div>
    </header>
  );
};

export default Header;
