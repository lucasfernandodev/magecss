import Container from "../components/Container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/HeroPost";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>MAGE CSS - Dicas de front-end</title>
        </Head>
        {heroPost && (
          <HeroPost
            tags = {heroPost.tags}
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            readTime={heroPost.readTime}
            slug={heroPost.slug}
            summary={heroPost.summary}
          />
        )}
        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
    "coverImage",
    "summary",
    "readTime",
    "tags",
  ]);

  return {
    props: { allPosts },
  };
};
