import styles from './style.module.css';

type Props = {
    children : React.ReactNode
    color?: string;
    fontSize?: string;
};

const Text  = ({children, color, fontSize}: Props) => {
    return (
        <p className={`${styles.text} ${color ? styles[`color-${color}`] : null} ${fontSize ? styles[`font-size-${fontSize}`] : null}`}>{children}</p>
    )
};

export default Text;