import Layout from "@/components/UI/Molecules/Layout";
import Head from '@/components/UI/Atoms/Head';
import PostType from "@/types/post";
import Header from "@/components/UI/Organisms/Header";
import Title from "@/components/UI/Atoms/Title";
import Divider from "@/components/UI/Atoms/Divider";
import Summary from "@/components/UI/Atoms/Summary";
import Feed from "@/components/UI/Organisms/Feed";
import Container from "@/components/UI/Atoms/Container";



type GhostProps = {
  posts: PostType[]
}

const PostsTemplate = ({posts}: GhostProps) => {

  return (
    <Layout pageType="primary">
      <Head title="Todos as postagens" />

      <Header align="center">
        <Title variant="h1">Todas as postagens</Title>
        <Summary>
          Esses são todos os artigos postados no blog até o momento.
        </Summary>
      </Header>

      <Divider type="space" space="large"/>

      <Container>
        <Feed  listPost={posts} template="full-post"/>
      </Container>
    </Layout>
  );
};

export default PostsTemplate;
