import styles from "./style.module.css";
import Title from "@/components/UI/Atoms/Title";
import ViewCounter from "@/Molecules/ViewCounter";
import Author from "../../Molecules/Author";
import ReadTime from "../../Molecules/ReadTime";
import Summary from "../../Atoms/Summary";

type Props = {
  title: string;
  date: string;
  summary: string;
  reading_time: number;
  slug: string;
};

const PostHeader: React.FC<Props> = ({ slug,reading_time, title, date, summary,}) => {
  return (
    <header className={`${styles["post-header"]}`}>
      <div className={styles.content}>
        <Title variant="h1">{title}</Title>

        <Summary>
          {summary}
        </Summary>

        <div className={styles["post-header__meta"]}>
          <div>
          <Author name="Lucas Fernando" data={date}/>
          <span>•</span>
          <ReadTime time={reading_time} />
          </div>
         <div>

         <ViewCounter observer={true} slug={slug} />
         </div>
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
