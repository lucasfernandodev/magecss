import getPostByTags from "../../lib/api";
import { useRouter } from "next/router";
import postTags from "../../data/postTags";
import Tags from '@/Templates/Tags';
import PostType from '../../types/post';


const Tag = ( posts : PostType[]) => {
  const router = useRouter();
  const {slug}  = router.query;
  const tag = slug as string;

  const obj = Object.values(posts);
  return <Tags posts={obj} tag={tag}/>
};

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const tags = params.slug;
  const posts = getPostByTags(tags); // Tem que ser um array

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

export default Tag;
