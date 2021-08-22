import style from "./style.module.css";
import List from "@/components/UI/Molecules/List";
import ListType from "@/types/list";

type Props = {
  listTopics: ListType[];
};

const Topics: React.FC<Props> = ({ listTopics }) => (
  <aside className={style.TopicsList}>
    {listTopics.map((list, key) => ( <List key={key} id={key} data={list} /> ))}
  </aside>
);

export default Topics;
