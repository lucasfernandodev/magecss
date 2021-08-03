import Layout from "@/Molecules/Layout";
import Head from "@/Atoms/Head";
import PostPreview from "@/Organisms/PostPreview";
import CardCollection from "@/Organisms/CardCollection";
import Title from "@/components/Atoms/Title";
import Header from "@/Organisms/Header";
import Summary from "@/Atoms/Summary";
import Divider from "@/Atoms/Divider";
import PostType from "../../../types/post";

type TagsProps = {
  post: PostType[];
  tag: string;
};

const Tags = ({ post, tag }: TagsProps) => {

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
      <CardCollection>
        {post.map((post, id) => (
          <PostPreview
            key={id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            tags={post.tags}
            slug={post.slug}
            summary={post.summary}
            readTime={post.readTime}
          />
        ))}
      </CardCollection>
    </Layout>
  );
};

export default Tags;
