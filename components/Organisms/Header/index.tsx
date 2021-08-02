import styles from "./style.module.css";

type Props = {
  children: React.ReactNode;
  align?: string;
};
const Header = ({ children, align }: Props) => {
  return (
    <header className={styles.header}>
      <div className={`${styles.content} ${align ? styles[`${align}`] : null}`}>{children}</div>
    </header>
  );
};

export default Header;
