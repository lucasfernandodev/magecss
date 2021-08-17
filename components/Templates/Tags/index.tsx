import Layout from "@/components/UI/Molecules/Layout";
import Head from "@/components/UI/Atoms/Head";
import Title from "@/components/UI/Atoms/Title";
import Header from "@/components/UI/Organisms/Header";
import Summary from "@/components/UI/Atoms/Summary";
import Divider from "@/components/UI/Atoms/Divider";
import PostType from "@/types/post";
import Container from "@/components/UI/Atoms/Container";
import PostPreview from "@/components/UI/Organisms/PostPreview";

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
      <Container gap={16}>
        {posts && posts.map((post) => (
          <PostPreview
          key={post.id}
          title={post.title}
          coverImage={post.feature_image}
          date={post.published_at}
          slug={post.slug}
          tags={post.tags}
          reading_time={post.reading_time}
          layout="column"
          excerpt={post.excerpt}
        />
        ))}
      </Container>
      
      <Divider type="space" space="large"/>
      </Container>
    </Layout>
  );
};

export default TagsTemplate;
