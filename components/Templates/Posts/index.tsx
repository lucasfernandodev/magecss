import Layout from "@/components/UI/Molecules/Layout";
import Head from '@/components/UI/Atoms/Head';
import PostType from "@/types/post";
import Header from "@/components/UI/Organisms/Header";
import Title from "@/components/UI/Atoms/Title";
import Divider from "@/components/UI/Atoms/Divider";
import Summary from "@/components/UI/Atoms/Summary";
import Container from "@/components/UI/Atoms/Container";
import PostPreview from "@/components/UI/Organisms/PostStory";

type GhostProps = {
  posts: PostType[];
}

const PostsTemplate: React.FC<GhostProps> = ({posts}) => {

  return (
    <Layout pageType="primary">
      <Head title="Todas as postagens" />

      <Header align="center">
        <Title variant="h1">Todas as postagens</Title>
        <Summary>
          Esses são todos os artigos postados no blog até o momento.
        </Summary>
      </Header>

      <Divider type="space" space="large"/>

      <Container gap={16}>
        {posts && posts.map((post) => (
          <PostPreview
          key={post.id}
          title={post.title}
          thumbnail={post.feature_image}
          date={post.published_at}
          slug={post.slug}
          tags={post.tags}
          reading_time={post.reading_time}
          layout="block"
          excerpt={post.excerpt}
        />
        ))}
      </Container>
      
      <Divider type="space" space="large"/>
    </Layout>
  );
};

export default PostsTemplate;
