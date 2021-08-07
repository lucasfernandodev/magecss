import Layout from "@/Molecules/Layout";
import Head from "@/Atoms/Head";
import Title from "@/components/Atoms/Title";
import Header from "@/Organisms/Header";
import Summary from "@/Atoms/Summary";
import Divider from "@/Atoms/Divider";
import PostType from "../../../types/post";
import Feed from "@/components/Organisms/Feed";

type TagsProps = {
  posts: PostType[];
  tag: string;
};

const Tags = ({ posts, tag }: TagsProps) => {

  return (
    <Layout pageType={"primary"}>
      <Head title={`Todas as postagens com a tag ${tag}`} />
      <Header align="center">
        <Title variant="h1">Todas os postagens com a tag {tag}</Title>
        <Summary>
          Esses são todos os artigos do blog com a tag {tag} postados até o
          momento.
        </Summary>
      </Header>
      <Divider type="space" space="large" />
      <Feed  listPost={posts} template="full-post"/>
    </Layout>
  );
};

export default Tags;
