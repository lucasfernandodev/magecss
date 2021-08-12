import PostFeatured from "@/Organisms/PostFeatured";
import Layout from "@/Molecules/Layout";
import Head from "@/Atoms/Head";
import Post from "@/types/post";
import Feed from "@/components/Organisms/Feed";
import Container from "@/components/Atoms/Container";
import TopicsList from "@/components/Organisms/Topics";

import ListTopics from "../../../data/listTopics";

type HomeProps = {
  lastPost: Post;
  listPost: Post[];
};

const Home = ({ lastPost, listPost }: HomeProps) => {
  return (
    <Layout>
      <Head title="MAGE CSS - Dicas de front-end"/>

      <Container>
        <PostFeatured
          title={lastPost.title}
          coverImage={lastPost.coverImage}
          slug={lastPost.slug}
          summary={lastPost.summary}
        />
      </Container>

      <Container direction="row" display="flex">
        <Feed title="Postagens recentes" listPost={listPost} template="feed" />
        <TopicsList listTopics={ListTopics} />
      </Container>
    </Layout>
  );
};

export default Home;
