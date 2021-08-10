import HeroPost from "@/Organisms/PostFeatured";
import Layout from "@/Molecules/Layout";
import Head from "@/Atoms/Head";
import List from '../../../utils/list';
import Post from "../../../types/post";
import Feed from "@/components/Organisms/Feed";

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
    
      <Feed title="Postagens recentes" listPost={listPost} listsPostByTag={List} />

    </Layout>
  );
};

export default Home;
