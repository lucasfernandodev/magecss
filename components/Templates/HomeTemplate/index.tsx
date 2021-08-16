import PostFeatured from "@/Organisms/PostFeatured";
import Layout from "@/Molecules/Layout";
import Head from "@/Atoms/Head";
import PostType from "@/types/post";
import ListType from '@/types/list'
import Feed from "@/components/Organisms/Feed";
import Container from "@/components/Atoms/Container";
import TopicsList from "@/components/Organisms/Topics";

import ListTopics from "../../../data/listTopics";
import Divider from "@/components/Atoms/Divider";
import { FeedProvider } from "@/components/Context/Feed";



type HomeProps = {
  lastPost: PostType;
  listPost: PostType[];
  listTopics: ListType[];
};

const HomeTemplate = ({ lastPost, listPost, listTopics}: HomeProps) => {
  return (
    <Layout>
      <Head title="MAGE CSS - Dicas de front-end"/>

      <Container>
        <PostFeatured
          title={lastPost.title}
          coverImage={lastPost.feature_image}
          slug={lastPost.slug}
          summary={lastPost.excerpt}
          tags={lastPost.tags}
        />
      </Container>
      <Divider space="large" type="row"/>
      <Container direction="row" display="flex">
      <FeedProvider>
        <Feed title="Postagens recentes" listPost={listPost} template="feed" />
      </FeedProvider>
      
        <TopicsList listTopics={listTopics} />
      </Container>
    </Layout>
  );
};

export default HomeTemplate;
