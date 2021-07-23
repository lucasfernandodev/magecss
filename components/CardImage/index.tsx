import styles from './style.module.css';
import Image from 'next/image';

type Props = {
    src: string;
    alt: string;
    subtitle?: string;
}
const CardImage = ({src, alt, subtitle} : Props) => {
    return (
        <figure className={styles.cardimage}>
            <Image src={src} height={610} width={992} alt={alt}/>
            <figcaption className={styles.cardimage__subtitle}>
                {subtitle ? subtitle : null}
            </figcaption>
        </figure>
    )
};

export default CardImage;