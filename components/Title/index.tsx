import styles from "./style.module.css";

type Props = {
  children: React.ReactNode;
  variant: string
};

const Title = ({ children, variant }: Props) => {
  return (
    <div className={styles.title}>
      {variant === 'h1' ? <h1>{children}</h1>: null}
      {variant === 'h2' ? <h2>{children}</h2>: null}
      {variant === 'h3' ? <h3>{children}</h3>: null}
      {variant === 'h4' ? <h4>{children}</h4>: null}
      {variant === 'h5' ? <h5>{children}</h5>: null}
      {variant === 'h6' ? <h6>{children}</h6>: null}
    </div>
  );
};

export default Title;
