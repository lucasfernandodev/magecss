import CoverImage from "@/Atoms/CoverImage";
import Link from "@/Atoms/Link";
import styles from "./style.module.css";
import Summary from "@/Atoms/Summary";
import Title from "@/Atoms/Title";
import Icon from "@/components/Utils/Icon";
import Box from "@/components/Atoms/Box";
import ButtonLike from "@/components/Molecules/ButtonLike";
import ButtonComment from "@/components/Molecules/ButtonComment";
import Tags from "@/components/Molecules/Tags";
import TagsType from '@/types/tag';
type Props = {
  title: string;
  coverImage: string;
  summary: string;
  slug: string;
  tags: TagsType[];
};

const PostFeatured = ({ title,tags, coverImage, summary, slug }: Props) => {
  return (
    <section className={styles.PostFeatured}>
      <div className={styles.PostFeatured__thumbnail}>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>

      <div className={styles.PostFeatured__header}>
        <div className={styles.PostFeatured__tags}>
          <span className={styles.PostFeatured__tag}>
            <Icon icon="fire" /> Novo
          </span>
        </div>

        <div className={styles.PostFeatured__title}>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <Title variant="h2"> {title} </Title>
          </Link>
        </div>

        <div className={styles.PostFeatured__subtitle}>
          <Summary limitRow={4}>{summary}</Summary>
        </div>

        <div className={styles.PostFeatured__more}>
          <Link href={`/posts/${slug}`}>
            Continuar Lendo
            <Icon icon="arrowTo" />
          </Link>
        </div>

        <div className={styles.PostFeatured__meta}>
          <Box justifyContent="space-between" width="100%" alignItens="center">
            <Box justifyContent="flex-end">
              <ButtonLike slug={slug} />
              <ButtonComment onClick={() => {}} />
            </Box>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default PostFeatured;
