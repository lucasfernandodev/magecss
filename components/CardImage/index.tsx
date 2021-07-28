import styles from './style.module.css';
import Image from 'next/image';

type Props = {
    src: string;
    alt: string;
}
const CardImage = ({src, alt} : Props) => {
    return (
        <figure className={styles.cardimage}>
            <Image src={src} height={610} width={992} alt={alt}/>
        </figure>
    )
};

export default CardImage;