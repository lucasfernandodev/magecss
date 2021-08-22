import PostFeatured from "@/components/UI/Organisms/PostFeatured";
import Layout from "@/components/Utils/Layout";
import Head from "@/components/Utils/Head";
import PostType from "@/types/post";
import ListType from "@/types/list";
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

const HomeTemplate = ({ lastPost, listPost, listTopics }: HomeProps) => {
  return (
    <Layout>
      <Head />

      <Container>
        <PostFeatured
          title={lastPost.title}
          coverImage={lastPost.feature_image}
          slug={lastPost.slug}
          summary={lastPost.excerpt}
        />
      </Container>

      <Divider space="large" type="row" />

      <Container direction="row" display="flex">
        <FeedProvider>
          <Feed
            title="Postagens recentes"
            listPost={listPost}
            template="feed"
          />
        </FeedProvider>

        <TopicsList listTopics={listTopics} />
      </Container>
    </Layout>
  );
};

export default HomeTemplate;
