import Link from "@/components/UI/Atoms/Link";
import styles from "./style.module.css";
import TagType from "@/types/tag";

type Props = {
  data: TagType[];
  limited?: boolean | number | undefined;
};

const Tags = ({ data, limited }: Props) => {
  const limitedItems = 3;
  const content =
    limited && typeof limited != "undefined"
      ? data.slice(0, limitedItems)
      : data;

  return (
    <ul className={styles.tags}>
      {content.map((tag) => (
        <li
          className={styles.item}
          key={tag.slug}
          data-tag={tag.name.toLowerCase()}
        >
          <Link href={`/tags/${tag.slug}`}>{tag.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
