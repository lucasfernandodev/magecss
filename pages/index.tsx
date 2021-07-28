import HeroPost from "../components/HeroPost";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";
import CardCollection from "../components/CardCollection";
import PostPreview from "../components/PostPreview";

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
            tags={heroPost.tags}
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            readTime={heroPost.readTime}
            slug={heroPost.slug}
            summary={heroPost.summary}
          />
        )}

        <CardCollection title="Publicações recentes">
          {morePosts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              summary={post.summary}
              tags={post.tags}
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
    "coverImage",
    "summary",
    "readTime",
    "tags",
  ]);

  return {
    props: { allPosts },
  };
};
