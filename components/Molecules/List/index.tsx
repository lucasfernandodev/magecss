import Link from '@/Atoms/Link';
import styles from "./style.module.css";
import Title from "@/Atoms/Title";
import Icon from "@/components/Utils/Icon";
import Topics from "@/types/topics";

type ListsProp = {
  content: Topics[];
  title: string;
  tag: string;
  icon?: boolean;
  target: string | undefined;
};

const List = ({ title, content, tag, target, icon }: ListsProp) => {
  return (
    <div className={styles.list}>
      <header>
        {icon !== true ? null : <Icon icon="hash" />}
        <Title variant="h3">{title}</Title>
      </header>

      <section>
        <ul>
          {content && content.map((item, id) => (
              <li key={id}>
                <Link href={item.slug}>
                  <Title variant="h4">{item.title}</Title>
                </Link>
                <p className="tag">{tag}</p>
              </li>
            ))}
        </ul>
      </section>

      {target && (
        <footer>
          Ver mais postagens de 
          <Link href={target}> {tag}</Link>
        </footer>
      )}
    </div>
  );
};

export default List;
