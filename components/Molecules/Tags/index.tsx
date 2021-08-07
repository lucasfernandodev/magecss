import Link from "next/link";
import styles from "./style.module.css";
import { useState } from "react";
type Props = {
  tags: string;
  limitTags?: number;
};

const Tags = ({ tags, limitTags }: Props) => {
  let ArrayOfTags = [];
  const getTagPath = "/tags/";
  const tagsIsValid = tags.length < 3 ? false : true;

  const tagsInLowerCase = tags.toLocaleLowerCase();
  ArrayOfTags = tagsInLowerCase.split(" ");

  if (limitTags) {
    ArrayOfTags =
      ArrayOfTags.length > 1 ? ArrayOfTags.slice(0, limitTags) : ArrayOfTags;
  }

  return (
    <>
      {tagsIsValid && (
        <ul className={styles.tags}>
          {ArrayOfTags.length > 1 ? (
            ArrayOfTags.map((item, id) => (
              <li key={id} className={styles.item} data-tag={item}>
                <Link href={`${getTagPath}${item}`}>{item}</Link>
              </li>
            ))
          ) : (
            <li className={styles.item} data-tag={ArrayOfTags[0]}>
              <Link href={`${getTagPath}${ArrayOfTags[0]}`}>
                {ArrayOfTags[0]}
              </Link>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default Tags;
