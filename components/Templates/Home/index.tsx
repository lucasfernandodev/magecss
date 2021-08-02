import HeroPost from "@/Organisms/PostFeatured";
import Layout from "@/Molecules/Layout";
import CardCollection from "@/Organisms/CardCollection";
import PostPreview from "@/Organisms/PostPreview";
import Head from "@/Atoms/Head";

import Post from "../../../types/post";

type HomeProps = {
  lastPost: Post;
  listPost: Post[];
};

const Home = ({ lastPost, listPost }: HomeProps) => {
  return (
    <Layout>
      <Head />
      {lastPost && (
        <HeroPost
          tags={lastPost.tags}
          title={lastPost.title}
          coverImage={lastPost.coverImage}
          date={lastPost.date}
          readTime={lastPost.readTime}
          slug={lastPost.slug}
          summary={lastPost.summary}
        />
      )}

      <CardCollection title="Publicações recentes" titleColor="primary">
        {listPost.map((post) => (
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
  );
};

export default Home;
