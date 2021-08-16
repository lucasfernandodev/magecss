import Tags from '@/Templates/Tags';
import PostType from '@/types/post';
import { getTagsAll, getPostsFilterByTag } from '../../lib/ghost';

type TagsProp = {
  posts: PostType[];
  tags: string
}
const Tag = ( posts : TagsProp) => {

  return <Tags posts={posts.posts} tag={posts.tags}/>
};

export default Tag;


export async function getStaticProps({ params }: { params: { slug: string } }) {
  const tags = params.slug;
  const posts = await getPostsFilterByTag(tags); // Tem que ser um array

  return {
    props: {posts, tags},
  };
}

export async function getStaticPaths() {
  const Tags = await getTagsAll()
  const paths = Tags.map((tag : {slug: string, name: string}) => ({
    params: { slug: tag.slug },
  }))

  return { paths, fallback: false }
}


