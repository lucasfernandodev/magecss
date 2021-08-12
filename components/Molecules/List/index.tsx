import Link from '@/Atoms/Link';
import styles from "./style.module.css";
import Title from "@/Atoms/Title";
import Icon from "@/components/Utils/Icon";
import Topics from "@/types/topics";
import Badge from '@/components/Atoms/Badge';

type ListsProp = {
  id: number;
  content: Topics[];
  title: string;
  tag: string;
  icon?: boolean;
  target: string | undefined;
};

const List = ({ id, title, content, tag, target, icon }: ListsProp) => {
  return (
    <div className={styles.list}>
      <header>
        {icon !== true ? null : <Icon icon="hash" />}
        <Title variant="h3">{title}</Title>
      </header>

      <section>
        <ul>
          {content && content.map((item, key) => (
              <li key={key}>
                <Link href={item.slug}>
                  <Title variant="h4">{item.title}</Title>
                </Link>
                {id === 0 ? <Badge text={tag} type="transparent" /> : <Badge text={tag} />}
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
