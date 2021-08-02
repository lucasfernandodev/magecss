import Posts from "@/Templates/Posts";
import { getAllPosts } from "../../lib/api";
import Post from "../../types/post";

type Props = {
  allPosts: Post[];
};


const Index = ({ allPosts }: Props) => {
  const postAll = allPosts;
  return <Posts listPosts={postAll} />;
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
