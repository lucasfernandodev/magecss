import Section from "@/Atoms/Section";
import Header from "@/Organisms/PostHeader";
import Article from "@/Organisms/PostBody";
import Footer from "@/Organisms/PostFooter";
import Layout from "@/Molecules/Layout";
import Head from "@/Atoms/Head";

import PostReaction from "@/Organisms/PostReaction";
import PostType from "@/types/post";
import Author from "@/components/Molecules/Author";

type GhostProps = {
  post: PostType
}

const Post = ({ post }: GhostProps) => {
  const bioAuthor = 'Dev Apaixonado por Tecnologia & Educação! Evolua rápido como a tecnologia, aprendizado é contínuo e sempre haverá um próximo nível. Boost Yourself! 🚀'

  return (
    <Layout pageType="primary">
      <Section>
        <Head title={post.title} ogImage={post.feature_image} />
        <Header
          title={post.title}
          date={post.published_at}
          summary={post.excerpt}
          slug={post.slug}
        />
        <Article
          content={post.html}
          thumbnail={post.feature_image}
          title={post.title}
        />
        <Footer>
          <PostReaction  slug={post.slug} tags={post.tags}/>
          <Author name={'Lucas Fernando'} src="/assets/author/lucas-transparent.png" subtitle={bioAuthor} large/>
        </Footer>
      </Section>
    </Layout>
  );
};

export default Post;
