import styles from "./style.module.css";

import Link from "@/components/UI/Atoms/Link";
import CoverImage from "@/components/UI/Atoms/CoverImage";
import Tags from "@/components/UI/Molecules/Tags";
import PostMeta from "@/components/UI/Molecules/PostMeta";
import TagType from "@/types/tag";
import Title from "@/components/UI/Atoms/Title";
import ButtonLike from "@/components/UI/Molecules/ButtonLike";
import ButtonComment from "@/components/UI/Molecules/ButtonComment";
import Author from "@/components/UI/Molecules/Author";
import Box from "@/components/UI/Atoms/Box";
import Summary from "../../Atoms/Summary";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
  tags: TagType[];
  reading_time?: number;
  id?: number | undefined;
  layout?: string;
  excerpt?: string;
};

const LayoutNormal = ({
  id,
  title,
  coverImage,
  date,
  reading_time,
  slug,
  tags,
  layout = "normal",
}: Props) => {
  return (
    <div
      className={`${styles.card} ${styles[`layout-${layout}`]}`}
      data-key={id}
    >
      <header>
        {id === 0 ? (
          <div className={styles.card__thumbnail}>
            <CoverImage slug={slug} title={title} src={coverImage} />
          </div>
        ) : null}
      </header>

      <section>
        <div className={styles.author}>
          <Author
            name="Lucas Fernando"
            src="/assets/author/lucas-transparent.png"
            data={date}
          />
        </div>

        <div className={styles["card__content"]}>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <Title variant="h2" lineOverflow={2}>
              {title}
            </Title>
          </Link>

          <Box direction="column" gap="16px" width="100%">
            <Tags data={tags} limitTags={3} />

            <Box
              justifyContent="space-between"
              width="100%"
              alignItens="center"
            >
              <div className={styles.group_button}>
                <ButtonLike slug={slug} />
                <ButtonComment onClick={() => {}} />
              </div>

              <Box justifyContent="center" alignItens="center">
                <PostMeta slug={slug} reading_time={reading_time} />
              </Box>
            </Box>
          </Box>
        </div>
      </section>
    </div>
  );
};

const LayoutRow = ({
  id,
  title,
  coverImage,
  date,
  reading_time,
  slug,
  tags,
  layout = "normal",
}: Props) => {
  return (
    <div
      className={`${styles.card} ${styles[`layout-${layout}`]}`}
      data-key={id}
    >
      <header>
        <div className={styles.card__thumbnail}>
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      </header>

      <section>
        <div className={styles.author}>
          <Author
            name="Lucas Fernando"
            src="/assets/author/lucas-transparent.png"
            data={date}
          />
        </div>

        <div className={styles["card__content"]}>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <Title variant="h2" lineOverflow={2}>
              {title}
            </Title>
          </Link>

          <Box direction="column" gap="16px" width="100%">
            <Tags data={tags} limitTags={3} />

            <Box
              justifyContent="space-between"
              width="100%"
              alignItens="center"
            >
              <div className={styles.group_button}>
                <ButtonLike slug={slug} />
                <ButtonComment onClick={() => {}} />
              </div>

              <Box justifyContent="center" alignItens="center">
                <PostMeta slug={slug} reading_time={reading_time} />
              </Box>
            </Box>
          </Box>
        </div>
      </section>
    </div>
  );
};

const LayoutColumn = ({
  id,
  title,
  coverImage,
  date,
  reading_time,
  slug,
  tags,
  excerpt,
}: Props) => {
  return (
    <div className={`${styles.card} ${styles["layout-column"]}`} data-key={id}>
      <header>
        <div className={styles.card__thumbnail}>
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      </header>

      <section>
        <div className={styles.tags}>
          <Tags data={tags} limitTags={3} />
        </div>

        <div className={styles["card__content"]}>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <Title variant="h3" lineOverflow={2}>
              {title}
            </Title>
          </Link>

          <div className={styles.summary}>{excerpt}</div>

          <Box direction="row" gap="16px" width="100%" alignItens="center">
            <div className={styles.author}>
              <Author
                name="Lucas Fernando"
                src="/assets/author/lucas-transparent.png"
                data={date}
              />
              <Box justifyContent="center" alignItens="center">
                <PostMeta slug={slug} reading_time={reading_time} />
              </Box>
            </div>
          </Box>
        </div>
      </section>
    </div>
  );
};

const PostPreview = (props: Props) => {
  return (
    <>
      {typeof props.layout == "undefined" ? LayoutNormal(props) : null}
      {props.layout == "row" ? LayoutRow(props) : null}
      {props.layout == "column" ? LayoutColumn(props) : null}
    </>
  );
};
export default PostPreview;
