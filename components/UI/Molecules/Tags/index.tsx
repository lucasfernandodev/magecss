import Link from "@/components/UI/Atoms/Link";
import styles from "./style.module.css";
import TagType from "@/types/tag";

type Props = {
  data: TagType[] | undefined;
  limitTags?: number;
};

const Tags = ({ data, limitTags }: Props) => {
  let Tag = data;
  const getTagPath = "/tags/";
  
  if (limitTags) {
    if(typeof(data) != 'undefined'){
      Tag = data.length > 1 ? data.slice(0, limitTags) : data;
    }
  }

  return (
    <>
      {Tag && typeof(Tag[0]) !== 'undefined' ? (
        <ul className={styles.tags}>
          {Tag && Tag.length > 1 ? (
            Tag.map((item) => (
              <li key={item.id} className={styles.item} data-tag={item}>
                <Link href={`${getTagPath}${item.slug}`}>{item.name}</Link>
              </li>
            ))
          ) : (
            <li className={styles.item} data-tag={Tag[0].name}>
              <Link href={`${getTagPath}${Tag[0].slug}`}>
                {Tag[0].name}
              </Link>
            </li>
          )}
        </ul>
      ): null}
    </>
  );
};

export default Tags;
