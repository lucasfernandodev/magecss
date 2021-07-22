import Link from 'next/link';
import styles from './style.module.css';

type Props = {
    tags : string[];
    limitTags?: number
} 

const Tags = ({tags, limitTags}: Props) => {

    const createCopeOfArray = limitTags ? tags.slice(0, limitTags) : tags;


    const listTags = createCopeOfArray.map((tag) => {

        const tagToLowerCase = tag.toLowerCase();

        return (<span key={tag} className={`${styles['c-tags__item']} ${styles[`c-tags__item--${tagToLowerCase}`]}`}>
            <Link href={`/tags/${tag}`}>{tag}</Link>
        </span>)
    })


    return(
        <div className={styles['c-tags']}>
            {listTags}
        </div>
    )
};

export default Tags;