import styles from "./style.module.css";
import Container from "@/components/Atoms/Container";
import Post from "../../../types/post";
import Title from "@/components/Atoms/Title";
import PostPreview from "../PostPreview";
import Lists from "@/components/Molecules/Lists";
import FeedMenu from "@/components/Molecules/FeedMenu";

type listItem = {
  title: string;
  slug: string;
  tag: string;
};

type List = {
  title: string;
  tag: string;
  target: string | boolean;
  data: listItem[];
};

type FeedType = {
  listPost: Post[];
  listsPostByTag?: List[];
  title?: string;
  template?: string;
};

const Feed = ({ listPost, listsPostByTag, title, template }: FeedType) => {
  return (
    <Container>
      <div className={styles.feed} data-template={template}>
        <section>
          <article>
            <header>
              {title ? <Title variant="h3">{title}</Title> : null}
              <FeedMenu />
            </header>
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
            {listsPostByTag
              ? listsPostByTag.map((list, key) => {
                  if (key === 0) {
                    return (
                      <Lists
                        target={list.target}
                        key={key}
                        list={list.data}
                        title={list.title}
                        tag={list.tag}
                        nohash
                      />
                    );
                  } else {
                    return (
                      <Lists
                        target={list.target}
                        key={key}
                        list={list.data}
                        title={list.title}
                        tag={list.tag}
                      />
                    );
                  }
                })
              : null}
          </aside>
        </section>
      </div>
    </Container>
  );
};

export default Feed;
