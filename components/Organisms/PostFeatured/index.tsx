import CoverImage from "../../Atoms/CoverImage";
import Link from "next/link";
import Tags from "../../Molecules/Tags";
import styles from "./style.module.css";
import PostMeta from "../../Molecules/PostMeta";
import Summary from "../../Atoms/Summary";
import Title from "../../Molecules/Title";
import Container from "../../Atoms/Container";
type Props = {
  title: string;
  coverImage: string;
  date: string;
  summary: string;
  readTime: string;
  slug: string;
  tags: string;
};

const PostFeatured = ({
  title,
  tags,
  coverImage,
  date,
  summary,
  readTime,
  slug,
}: Props) => {
  const tagsToArray = tags.split(" ");

  return (
    <Container>
      <section className={styles.PostFeatured}>
        <div className={styles.PostFeatured__thumbnail}>
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>

        <div className={styles.PostFeatured__header}>
          <span className={styles.PostFeatured__tag}>
            <span>Último Artigo</span>
            <Tags tags={tagsToArray} limitTags={3} />
          </span>

          <Title variant="h2">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              {title}
            </Link>
          </Title>

          <Summary>{summary}</Summary>

          <PostMeta
            slug={slug}
            views={{ slug, observer: false }}
            date={date}
            readTime={readTime}
            likes
          />
        </div>
      </section>
    </Container>
  );
};

export default PostFeatured;