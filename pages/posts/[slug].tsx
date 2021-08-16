import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getSinglePost, getPosts } from '../../lib/ghost';

import Post from "@/Templates/Post";

import {GetStaticPropsContext } from 'next'
// PostPage page component

type PostType = {
  slug: string,
  excerpt: string,
  feature_image: string,
  published_at: string,
  title: string,
  html: string,
  id: string;
}

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

  // Get the paths we want to create based on posts
  const paths = posts.map((post: {slug: string}) => ({
    params: { slug: post.slug },
  }))

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false }
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API

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