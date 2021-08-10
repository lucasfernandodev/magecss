import CoverImage from "@/Atoms/CoverImage";
import Link from "next/link";
import Tags from "@/Molecules/Tags";
import styles from "./style.module.css";
import PostMeta from "@/Molecules/PostMeta";
import Summary from "@/Atoms/Summary";
import Title from "@/Atoms/Title";
import Container from "@/Atoms/Container";
import Icon from "@/components/Utils/Icon";
import Box from "@/components/Atoms/Box";
import ButtonLike from "@/components/Molecules/ButtonLike";
import ButtonComment from "@/components/Molecules/ButtonComment";
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
            <span className={styles.PostFeatured__tag}>
              <Icon icon="fire" /> Novo
            </span>
            {/* <Tags tags={tags} limitTags={4} /> */}
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

          <div className={styles.PostFeatured__more}>
            <Link href={`/posts/${slug}`}>
              <a>
                Continuar Lendo
                <Icon icon="arrowTo" />
              </a>
            </Link>
          </div>

          <div className={styles.PostFeatured__meta}>
            <Box
              justifyContent="space-between"
              width="100%"
              alignItens="center"
            >
              <Box justifyContent="flex-end">
                <ButtonLike slug={slug} />
                <ButtonComment onClick={() => {}} />
              </Box>
            </Box>
          </div>
        </div>       
    </section>
    </Container>
  );
};

export default PostFeatured;
