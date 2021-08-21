import Title from '../../Atoms/Title';
import styles from './style.module.css';

const Empty = () => {
  return (
    <div className={styles.empty}>
      <div className="image">
        <img src="/assets/empty.svg" alt="empty" />
      </div>
      <div className={styles.text}>
        <Title variant="h1">Sem postagens no momento.</Title>
      </div>
    </div>
  )
};

export default Empty;