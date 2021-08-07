import CoverImage from "@/Atoms/CoverImage";
import Link from "next/link";
import Tags from "@/Molecules/Tags";
import styles from "./style.module.css";
import PostMeta from "@/Molecules/PostMeta";
import Summary from "@/Atoms/Summary";
import Title from "@/Atoms/Title";
import Container from "@/Atoms/Container";
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
  return (
    <Container>
      <section className={styles.PostFeatured}>
        <div className={styles.PostFeatured__thumbnail}>
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>

        <div className={styles.PostFeatured__header}>
          <div className={styles.PostFeatured__tags}>
            <Tags tags={tags} limitTags={4} />
          </div>

          <div className={styles.PostFeatured__title}>
            <Title variant="h2">
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                {title}
              </Link>
            </Title>
          </div>

          <div className={styles.PostFeatured__subtitle}>
            <Summary limitRow={4}>{summary}</Summary>
          </div>
          <PostMeta
            slug={slug}
            views={{ slug, observer: false }}
            readTime={readTime}
          />
        </div>
      </section>
    </Container>
  );
};

export default PostFeatured;
