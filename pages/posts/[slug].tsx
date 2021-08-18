import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getSinglePost, getPosts } from '../../lib/ghost';
import PostType from "@/types/post";
import Post from "@/Templates/Post";
import markdownToHtml from "lib/markdownToHtml";
import {useEffect} from 'react';
type GhostProps = {
  post: PostType
}

const Index = ({ post }: GhostProps) => {
  const router = useRouter();


  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }


  return (
    <>{router.isFallback ? <h1>Loading…</h1> : <Post post={post} />}</>
  );
};

export default Index;

export async function getStaticPaths() {
  const posts = await getPosts()

  const paths = posts.map((post: {slug: string}) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}


type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = await getSinglePost(params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }
  return {
    props: { post }
  }
}