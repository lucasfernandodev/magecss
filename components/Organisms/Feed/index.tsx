import styles from "./style.module.css";
import Container from "@/components/Atoms/Container";
import Post from "../../../types/post";
import Title from "@/components/Atoms/Title";
import PostPreview from "../PostPreview";
import Lists from "@/components/Molecules/Lists";

type List = {
  title: string;
  slug: string;
  tag: string;
};

type FeedType = {
  listPost: Post[];
  listsPostByTag?: List[];
  title?: string;
  template?: string
};

const Feed = ({ listPost, listsPostByTag, title, template }: FeedType) => {

  return (
    <Container>
      <div className={styles.feed} data-template={template}>
        <header>
          {title? (<Title variant="h3">{title}</Title>) : null}
        </header>
        <section>
          <article>
            {listPost.map((post, key) => (
              <PostPreview
                id={key}
                key={key}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                slug={post.slug}
                tags={post.tags}
                readTime={post.readTime}
              />
            ))}
          </article>
          <aside>
            {listsPostByTag ? (<Lists list={listsPostByTag} title="Dica de css" tag="HTML5" />) :  null}
          </aside>
        </section>
      </div>
    </Container>
  );
};

export default Feed;
