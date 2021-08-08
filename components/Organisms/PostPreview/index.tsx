import Link from "next/link";
import styles from "./style.module.css";
import CoverImage from "@/Atoms/CoverImage";
import Tags from "@/Molecules/Tags";
import PostMeta from "@/Molecules/PostMeta";
import Title from "@/Atoms/Title";
import ButtonLike from "@/components/Molecules/ButtonLike";
import ButtonComment from "@/components/Molecules/ButtonComment";
import Author from "@/components/Molecules/Author";
import Box from "@/components/Atoms/Box";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
  tags: string;
  readTime: string;
  id?: number;
};

const PostPreview = ({
  id,
  title,
  coverImage,
  date,
  readTime,
  slug,
  tags,

}: Props) => {
  return (
    <div className={styles.card} data-lastoost={id}>
      {id === 0 ? (
        <div className={styles.card__thumbnail}>
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      ) : null}

      <Box>
        <Author name="Lucas Fernando" src="/assets/author/lucas-transparent.png" data={date} />
      </Box>

      <div className={styles["card__content"]}>
        <Title variant="h2" lineOverflow={2}>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            {title}
          </Link>
        </Title>

        <Box direction="column" gap="16px" width="100%">
          <Tags tags={tags} limitTags={3} />

          <Box justifyContent="space-between" width="100%" alignItens="center">
            <Box justifyContent="flex-end">
              <ButtonLike slug={slug} />
              <ButtonComment onClick={() => {}} />
            </Box>

            <Box justifyContent="center" alignItens="center">
              <PostMeta slug={slug} readTime={readTime} />
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default PostPreview;
