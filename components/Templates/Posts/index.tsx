import Layout from "@/Molecules/Layout";
import Head from '@/Atoms/Head';
import Post from "../../../types/post";
import CardCollection from "@/Organisms/CardCollection";
import PostPreview from "@/Organisms/PostPreview";
import Header from "@/Organisms/Header";
import Title from "@/components/Atoms/Title";
import Divider from "@/Atoms/Divider";
import Summary from "@/Atoms/Summary";

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
      <Divider type="space" space="large" />
      <CardCollection>
        {listPosts.map((post) => (
          <PostPreview
            key={post.slug}
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

export default Posts;
