import styles from './style.module.css';

type badgeProps = {
  text: string;
  type?: string;
}
const Badge = ({text, type}: badgeProps) => {
  return(
    <span data-type={type} className={styles.badge}>{text}</span>
  )
};

export default Badge;