import Link from "@/components/UI/Atoms/Link";
import styles from "./style.module.css";
import Title from "@/components/UI/Atoms/Title";
import Icon from "@/components/Utils/Icon";
import Topics from "@/types/topics";
import Badge from "@/components/UI/Atoms/Badge";
import ListType from "@/types/list";

type ListsProp = {
  data: ListType;
  id: number
};

const List = ({ data, id }: ListsProp) => {
  return (
    <div className={styles.list}>

      <header>
        {id === 0 ? null : (
          <Icon strokeWidth={2} icon="hash" height={30} width={30} />
        )}

        <Title variant="h3">{data.title}</Title>
      </header>


          <section>
            <ul>
              {data &&
                data.content.map((item, key) => (
                  <li key={key}>
                    <Link href={`/posts/${item.slug}`}>
                      <Title variant="h4">{item.title}</Title>
                    </Link>
                    {id === 0 ? (
                      <Badge text={data.slug} type="transparent" />
                    ) : (
                      <Badge text={data.slug} />
                    )}
                  </li>
                ))}
            </ul>
          </section>

      {data.slug && (
        <footer>
          Ver mais postagens de
          <Link href={`/tags/${data.title}`}> {data.title}</Link>
        </footer>
      )}
    </div>
  );
};

export default List;
