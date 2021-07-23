import Container from "../../components/Container";
import PostAll from "../../components/PostAll";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../types/post";

type Props = {
  allPosts: Post[];
};

// Eu removi o slice(1) do allPost
const Index = ({ allPosts }: Props) => {
  const postAll = allPosts
  return (
    <>
      <Layout>
        <Head>
          <title>Todos as postagens - Mage Css</title>
        </Head>
        <Container>
          {postAll.length > 0 && <PostAll posts={postAll} />}
        </Container>
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
    "tags"
  ]);

  return {
    props: { allPosts },
  };
};
