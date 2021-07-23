import Image from 'next/image';
import styles from './style.module.css';

const PostAuthor = () => {
    return (
        <div className={styles.postauthor}>
            <div className={styles.postauthor__avatar}>
                <Image src={'/assets/blog/authors/lucasfernando_autor.jpg'} quality={65} layout="intrinsic" width={92} height={92} alt="Lucas fernando"/>
            </div>
            <div className={styles.postauthor__Content}>
                <h3 className={styles.postauthor__title}>Lucas Fernando</h3>
                <p className={styles.postauthor__subtitle}>Dev apaixonado por frontend e novas tecnologias, buscando sempre aprender mais.</p>
            </div>
        </div>
    )
};

export default PostAuthor;