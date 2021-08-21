import PostFeatured from "@/components/UI/Organisms/PostFeatured";
import Layout from "@/components/UI/Molecules/Layout";
import Head from "@/components/UI/Atoms/Head";
import PostType from "@/types/post";
import ListType from '@/types/list'
import Feed from "@/components/UI/Organisms/Feed";
import Container from "@/components/UI/Atoms/Container";
import TopicsList from "@/components/UI/Organisms/Topics";
import Divider from "@/components/UI/Atoms/Divider";
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
