import Posts from "@/Templates/Posts";
import PostType from '@/types/post';
import { getPosts } from "../../lib/ghost";
import {GetStaticPropsContext } from 'next'



type GhostProps = {
  posts: PostType[]
}

const Index = ({ posts }: GhostProps) => {

  const postAll = posts;
  return <Posts posts={postAll} />;
};

export default Index;

export async function getStaticProps(context: GetStaticPropsContext) {
  const posts = await getPosts() ?? null;
 
  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}
