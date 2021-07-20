import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Section from '../../components/Section';
import Header from "../../components/Section/Header";
import Article from "../../components/Section/Article";
import Footer from "../../components/Section/Footer";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import Comments from '../../components/Comments';
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
  readTime: string;
};

const Post = ({ post, morePosts, preview, readTime, }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <Section>
          <Head>
            <title>{post.title} - Mage Css</title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>
          <Header
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            readTime={post.readTime}
            summary={post.summary}
          />
          {console.log(post.readTime)}
          <Article content={post.content} />
          <Footer>
          <Comments post={({id : '1235444', title : post.title})} />
          </Footer>
        </Section>
      )}
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "readTime",
    "summary"
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
