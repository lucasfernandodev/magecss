import Icon from '@/components/Utils/Icon';
import styles from './style.module.css';

type buttonCommentProp = {
    onClick: () => void;
}

const ButtonComment = ({onClick} : buttonCommentProp) => {
    return (
        <button className={styles.buttonComment}>
            <span className={styles.buttonComment__icon}>
                <Icon icon="comment" width={20} height={20} strokeWidth={2} />
                </span>
            <span className={styles.buttonComment__reaction}>Add Comentário</span>
        </button>
    );
};

export default ButtonComment;