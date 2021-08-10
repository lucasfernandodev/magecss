import Link from "next/link";
import styles from "./style.module.css";
import Title from "@/Atoms/Title";
import Icon from "@/components/Utils/Icon";

type List = {
  title: string;
  slug: string;
  tag: string;
};

type ListsProp = {
  list: List[];
  title: string;
  tag: string;
  nohash?: boolean;
  target: string | boolean;
};

const Lists = ({ list, title, tag, target, nohash }: ListsProp) => {
  return (
    <div className={styles.list}>
      <header>
        {nohash ? null : <Icon icon="hash" />}
        <Title variant="h3">{title}</Title>
      </header>
      <article>
        <ul>
          {list ? (
            list.map((item, id) => (
              <li key={id}>
                <h4 className="title">
                  <Link href="/">{item.title}</Link>
                </h4>
                <p className="tag">{tag}</p>
              </li>
            ))
          ) : (
            <span>lista vazio</span>
          )}
        </ul>
      </article>

      {typeof target === "string" ? (
        <footer>
          Ver mais <Link href={target}>{tag}</Link>{" "}
        </footer>
      ) : null}
    </div>
  );
};

export default Lists;
