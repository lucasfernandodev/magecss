import style from "./style.module.css";
import List from "@/components/Molecules/List";
import ListType from "@/types/list";

type TopicsListProp = {
  listTopics: ListType[];
};

const Topics = ({ listTopics }: TopicsListProp) => {
  console.log("TOPCS", listTopics)
  return (
    <aside className={style.TopicsList}>
      {listTopics && listTopics.map((list, key) => {return <List key={key} id={key} data={list}/> })}
    </aside>
  );
};

export default Topics;
