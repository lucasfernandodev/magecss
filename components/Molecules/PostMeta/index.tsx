import styles from "./style.module.css";
import ViewCounter from "../ViewCounter";
import ReadTime from "../ReadTime";
import PublishTime from '../PublishTime';
import CSS from 'csstype';
type Props = {
  date?: string;

  readTime?: string;
  likes?: true;
  views?: {
    slug?: string;
    observer?: boolean;
  };
  slug: string

};

interface posicionamentoDatePublish {
  width: CSS.Property.Width;
}

const PostMeta = ({ date, readTime, views, slug }: Props) => {

  const dateCss: posicionamentoDatePublish = {
    width: 'fit-content',
  }

  return (
    <div className={styles["post-meta"]}>
      {date ? (<div style={dateCss}>
        <PublishTime data={date ? date : 'data invalida'}/>
      </div>
      ) : null}
      <div>
      {readTime ? (<ReadTime time={readTime} />) : null}
      {views ? (<ViewCounter observer={views.observer ? views.observer : false} slug={views.slug ? views.slug : 'erro'} />) : null}
      </div>
    </div>
  );
};

export default PostMeta;
