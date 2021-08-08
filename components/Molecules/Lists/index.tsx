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
};

const Lists = ({ list, title, tag }: ListsProp) => {
  return (
    <div className={styles.list}>
      <header>
       <Icon icon="hash" />
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
                <p className="tag">{item.tag}</p>
              </li>
            ))
          ) : (
            <span>lista vazio</span>
          )}
        </ul>
      </article>
      <footer>
        <span>Ver mais</span>
      </footer>
    </div>
  );
};

export default Lists;
