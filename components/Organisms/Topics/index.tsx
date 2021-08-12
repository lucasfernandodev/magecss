import style from "./style.module.css";
import List from "@/components/Molecules/List";
import ListType from "@/types/list";

type TopicsListProp = {
  listTopics: ListType[];
};

const Topics = ({ listTopics }: TopicsListProp) => {
  return (
    <aside className={style.TopicsList}>
      {listTopics
        ? listTopics.map((list, key) => {
            return (
            
              <List
                id={key}
                key={key}
                target={list.target}
                content={list.data}
                title={list.title}
                tag={list.tag}
                icon={key === 0 ? false : true}
              />
            );
          })
        : (
        <span>Sem listas no momento!</span>)
      }
    </aside>
  );
};

export default Topics;
