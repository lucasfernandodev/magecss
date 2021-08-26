import Link from "@/components/UI/Atoms/Link";
import styles from "./style.module.css";
import Title from "@/components/UI/Atoms/Title";
import Icon from "@/components/Utils/Icon";
import Badge from "@/components/UI/Atoms/Badge";
import ListType from "@/types/list";
type ListsProp = {
  data: ListType;
  id: number;
  featured?: boolean;
};

const List = ({ data, id, featured }: ListsProp) => {


  return (
    <div className={styles.list}>
      <header>

        {featured === false ? (
          <Link className="tag" href={`/tags/${data.slug.toLowerCase()}`} data-tag={data.slug.toLowerCase()}>
            <Icon strokeWidth={2} icon="hash" height={30} width={30} />
            <Title variant="h3">
            {data.title}
            </Title>
          </Link>
        ) : (
          <Title variant="h3">{data.title}</Title>
        )}
      </header>

      <section>
        <ul>
          {data && data.content.map((item, key) => (
              <li key={key}>
                <Link href={`/posts/${item.slug}`}>
                  <Title variant="h4">{item.title}</Title>
                </Link>
                {featured === true ? (
                  <Badge text={data.slug} type="transparent" />
                ) : (
                  <Badge text={data.slug} />
                )}
              </li>
            ))}
        </ul>
      </section>
      {featured !== false ?
      (
        
          <Link href={`/tags/${data.slug}`}>
            <footer>
            Ver todas as postagens
            </footer>
            </Link>
      ) : null}
    </div>
  );
};

export default List;
