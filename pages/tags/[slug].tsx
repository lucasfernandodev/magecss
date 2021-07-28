import getPostBytags from "../../lib/api";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Head from "next/head";
import PostPreview from "../../components/PostPreview";
import CardCollection from "../../components/CardCollection";

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
  console.log(obj);
  return (
    <>
      <Layout>
        <Head>
          <title>Todas as postagens em {tagName.slug} - MAGE CSS</title>
        </Head>

        <CardCollection title={`Todas as publicações com a tag ${tagName.slug}`} >
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
    </>
  );
};

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const tags = params.slug;
  const posts = getPostBytags(tags); // Temq ue ser um array

  return {
    props: {
      ...posts,
    },
  };
}

export async function getStaticPaths() {
  const tags = [
    { name: "css" },
    { name: "next" },
    { name: "geral" },
    { name: "frontend" },
    { name: "nextjs" },
  ];

  const paths = tags.map((item) => ({
    params: { slug: item.name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Post;
