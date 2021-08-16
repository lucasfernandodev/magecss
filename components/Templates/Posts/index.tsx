import Layout from "@/Molecules/Layout";
import Head from '@/Atoms/Head';
import PostType from "@/types/post";
import Header from "@/Organisms/Header";
import Title from "@/components/Atoms/Title";
import Divider from "@/Atoms/Divider";
import Summary from "@/Atoms/Summary";
import Feed from "@/components/Organisms/Feed";
import Container from "@/components/Atoms/Container";



type GhostProps = {
  posts: PostType[]
}

const Posts = ({posts}: GhostProps) => {

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

export default Posts;
