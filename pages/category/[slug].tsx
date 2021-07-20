import getPostByCategory, { getAllPosts, getPostBySlug } from "../../lib/api";
import PostType from "../../types/post";
import { useRouter } from "next/router";

type Props = {
  posts: PostType;
};

export function myUrl (){
  const url = useRouter();
  const slug = url.query;
  return slug
}

const Post = (posts : string[]) => {


  console.log(posts)

  return <section>oi</section>;

  
};

export async function getStaticProps({params} : {params : {slug: string}}) {

  const category = params.slug;
  const posts = getPostByCategory(category); // Temq ue ser um array

  return {
    props: {
      ...posts,
    },
  };
}

export async function getStaticPaths() {

  const category = [{name: 'css'}, {name: 'next'}, {name: 'geral'}, {name: 'frontend'}];


  const paths = category.map(item => ({
    params: { slug: item.name }
  }));

  return {
    paths,
    fallback: false
  };


}

export default Post;
