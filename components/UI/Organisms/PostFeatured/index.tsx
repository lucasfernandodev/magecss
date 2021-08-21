import CoverImage from "@/components/UI/Atoms/CoverImage";
import Link from "@/components/UI/Atoms/Link";
import styles from "./style.module.css";
import Summary from "@/components/UI/Atoms/Summary";
import Title from "@/components/UI/Atoms/Title";
import Icon from "@/components/Utils/Icon";
import Box from "@/components/UI/Atoms/Box";
import ButtonLike from "@/components/UI/Molecules/ButtonLike";
import ButtonComment from "@/components/UI/Molecules/ButtonComment";
import Tags from "@/components/UI/Molecules/Tags";
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
    <section className={styles.PostFeatured} style={{backgroundImage: `url(${coverImage})`}}>
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
            <Title variant="h2">
            {title}
            </Title>
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
