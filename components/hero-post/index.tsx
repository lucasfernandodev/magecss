import DateFormatter from "../date-formatter";
import CoverImage from "../cover-image";
import Link from "next/link";
import Author from "../../types/author";
import styles from './style.module.css'

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section className={styles.heroPost}>
      <div className={styles.heroPost__image}>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className={styles.heroPost__info}>
        <div>
          <span className={styles.heroPost__tag}>Último Artigo</span>
          <h3>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a>{title}</a>
            </Link>
          </h3>
        </div>
        <div>

          <p>{excerpt}</p>

          <div className={`post-author ${styles.postAuthor}`}>
            <p> por <span className="post-author__name"> {author.name} </span>
              em <span className="post-author__data">
                    <DateFormatter dateString={date} />
                  </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
