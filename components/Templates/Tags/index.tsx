import Layout from "@/components/UI/Molecules/Layout";
import Head from "@/components/UI/Atoms/Head";
import Title from "@/components/UI/Atoms/Title";
import Header from "@/components/UI/Organisms/Header";
import Summary from "@/components/UI/Atoms/Summary";
import Divider from "@/components/UI/Atoms/Divider";
import PostType from "@/types/post";
import TagType from '@/types/tag';
import Feed from "@/components/UI/Organisms/Feed";
import Container from "@/components/UI/Atoms/Container";

type TagsProps = {
  posts: PostType[];
  tag: string;
};

const TagsTemplate = ({ posts, tag }: TagsProps) => {
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
      <Container>
        <Feed listPost={posts} template="full-post" />
      </Container>
    </Layout>
  );
};

export default TagsTemplate;
