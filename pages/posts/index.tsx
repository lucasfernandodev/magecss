import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from '../../components/Layout/Head';
import Post from "../../types/post";
import CardCollection from "../../components/CardCollection";
import PostPreview from "../../components/PostPreview";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Divider from "../../components/Layout/Divider";
import Summary from "../../components/Summary";

type Props = {
  allPosts: Post[];
};

// Eu removi o slice(1) do allPost
const Index = ({ allPosts }: Props) => {
  const postAll = allPosts;
  return (
    <>
      <Layout pageType='primary'>
        <Head title='Todos as postagens' />
        <Header align="center">
          <Title variant='h1'>Todos as postagens</Title>
          <Summary>
            Esses são todos os artigos postados no blog até o momento.
          </Summary>
        </Header>
        <Divider type="space" space='large'/>
        <CardCollection>
          {postAll.map((post) => (
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
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "summary",
    "tags",
  ]);

  return {
    props: { allPosts },
  };
};
