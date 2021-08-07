import Icon from '@/components/Utils/Icon';
import styles from './style.module.css';

type ButtonLikeProp = {
    onClick: () => void;
}

const ButtonComment = ({onClick} : ButtonLikeProp) => {
    return (
        <button className={styles.buttonLike}>
            <span className={styles.buttonLike__icon}>
                <Icon icon="comment" width={24} height={24} strokeWidth={2} />
                </span>
            <span className={styles.buttonLike__reaction}>Add Comentário</span>
        </button>
    );
};

export default ButtonComment;