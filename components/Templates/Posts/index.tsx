import Layout from "@/Molecules/Layout";
import Head from '@/Atoms/Head';
import Post from "@/types/post";
import Header from "@/Organisms/Header";
import Title from "@/components/Atoms/Title";
import Divider from "@/Atoms/Divider";
import Summary from "@/Atoms/Summary";
import Feed from "@/components/Organisms/Feed";

type PostsProps = {
    listPosts: Post[]
};

const Posts = ({listPosts}: PostsProps) => {
  return (
    <Layout pageType="primary">
      <Head title="Todos as postagens" />

      <Header align="center">
        <Title variant="h1">Todos as postagens</Title>
        <Summary>
          Esses são todos os artigos postados no blog até o momento.
        </Summary>
      </Header>

      <Divider type="space" space="large"/>

      <Feed  listPost={listPosts} template="full-post"/>
    </Layout>
  );
};

export default Posts;
