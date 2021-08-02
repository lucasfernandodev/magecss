import Home from "@/components/Templates/Home";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const lastPost = allPosts[0];
  const listPost = allPosts.slice(1);

  return <Home lastPost={lastPost} listPost={listPost} />;
};

export default Index;


export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "summary",
    "readTime",
    "tags",
  ]);

  return {
    props: { allPosts },
  };
};
