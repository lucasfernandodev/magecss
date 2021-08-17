import Section from "@/components/UI/Atoms/Section";
import Header from "@/components/UI/Organisms/PostHeader";
import Article from "@/components/UI/Organisms/PostBody";
import Footer from "@/components/UI/Organisms/PostFooter";
import Layout from "@/components/UI/Molecules/Layout";
import Head from "@/components/UI/Atoms/Head";

import PostReaction from "@/components/UI/Organisms/PostReaction";
import PostType from "@/types/post";
import Author from "@/components/UI/Molecules/Author";

type GhostProps = {
  post: PostType
}

const PostTemplate = ({ post }: GhostProps) => {
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

export default PostTemplate;
