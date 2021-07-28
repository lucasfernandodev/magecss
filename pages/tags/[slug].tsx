import getPostBytags from "../../lib/api";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Head from "../../components/Layout/Head";
import PostPreview from "../../components/PostPreview";
import CardCollection from "../../components/CardCollection";
import postTags from "../../utils/postTags";
import Title from "../../components/Title";
import PostHeader from "../../components/PostHeader";
import Header from "../../components/Header";
import Summary from "../../components/Summary";
import Divider from "../../components/Layout/Divider";

type Props = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  tags: string;
  summary: string;
  ogImage: {
    url: string;
  };
  content: string;
  readTime: string;
};

export function myUrl() {
  const url = useRouter();
  const slug = url.query;
  return slug;
}

const Post = (posts: Props[]) => {
  const url = useRouter();
  const tagName = url.query;

  const obj = Object.values(posts);
  return (
    <Layout pageType={"primary"}>
      <Head title={`Todas as postagens com a tag ${tagName.slug}`} />
      <Header align="center">
        <Title variant="h1">Todas os postagens com a tag {tagName.slug}</Title>
        <Summary>
          Esses são todos os artigos do blog com a tag {tagName.slug} postados até o momento.
        </Summary>
      </Header>
      <Divider type="space" space="large"/>
      <CardCollection>
        {obj.map((post) => (
          <PostPreview
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

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const tags = params.slug;
  const posts = getPostBytags(tags); // Tem que ser um array

  return {
    props: {
      ...posts,
    },
  };
}

export async function getStaticPaths() {
  const paths = postTags.map((item: { name: string }) => ({
    params: { slug: item.name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Post;
