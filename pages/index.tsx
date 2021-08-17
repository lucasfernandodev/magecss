import HomeTemplate from "@/components/Templates/Home";
import { getPosts, getList } from "../lib/ghost";

import PostType from "@/types/post";
import ListType from '@/types/list'

type HomeProp = {
  posts: PostType[];
  list: ListType[];
}

const Home = ({ posts, list }: HomeProp) => {
  const lastPost = posts[0];
  const listPost = posts.slice(1);

  return <HomeTemplate lastPost={lastPost} listPost={listPost} listTopics={list} />;
};

export default Home;


export async function getStaticProps() {

  const posts = await getPosts() ?? null;
  const list = await getList() ?? null;

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts, list },
  };
}