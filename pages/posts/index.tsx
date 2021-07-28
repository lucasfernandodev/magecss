import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../types/post";
import CardCollection from "../../components/CardCollection";
import PostPreview from "../../components/PostPreview";

type Props = {
  allPosts: Post[];
};

// Eu removi o slice(1) do allPost
const Index = ({ allPosts }: Props) => {
  const postAll = allPosts;
  return (
    <>
      <Layout>
        <Head>
          <title>Todos as postagens - Mage Css</title>
        </Head>
        <CardCollection title="Todas as publicações">
          {postAll.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              tags={post.tags}
              slug={post.slug}
              summary={post.summary}
              readTime={post.readTime}
            />
          ))}
        </CardCollection>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "summary",
    "tags",
  ]);

  return {
    props: { allPosts },
  };
};
