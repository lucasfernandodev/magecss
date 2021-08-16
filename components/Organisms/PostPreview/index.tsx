import styles from "./style.module.css";

import Link from "@/Atoms/Link";
import CoverImage from "@/Atoms/CoverImage";
import Tags from "@/Molecules/Tags";
import PostMeta from "@/Molecules/PostMeta";
import TagType from '@/types/tag';
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
  tags: TagType[];
  reading_time?: number;
  id?: number;
};

const PostPreview = ({
  id,
  title,
  coverImage,
  date,
  reading_time,
  slug,
  tags,
}: Props) => {
  return (
    <div className={styles.card} data-key={id}>
      {id === 0 ? (
        <div className={styles.card__thumbnail}>
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      ) : null}

      <Box>
        <Author
          name="Lucas Fernando"
          src="/assets/author/lucas-transparent.png"
          data={date}
        />
      </Box>

      <div className={styles["card__content"]}>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <Title variant="h2" lineOverflow={2}>
            {title}
          </Title>
        </Link>

        <Box  direction="column" gap="16px" width="100%">
          <Tags data={tags} limitTags={3} />

          <Box justifyContent="space-between" width="100%" alignItens="center">
            <Box justifyContent="flex-end">
              <ButtonLike slug={slug} />
              <ButtonComment onClick={() => {}} />
            </Box>

            <Box justifyContent="center" alignItens="center">
              <PostMeta slug={slug} reading_time={reading_time} />
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default PostPreview;
