import Section from "@/Atoms/Section";
import Header from "@/Organisms/PostHeader";
import Article from "@/Organisms/PostBody";
import Footer from "@/Organisms/PostFooter";
import Layout from "@/Molecules/Layout";
import Head from "@/Atoms/Head";

import PostReaction from "@/Organisms/PostReaction";
import PostType from "@/types/post";
import Author from "@/components/Molecules/Author";

type PostProps = {
  post: PostType;
};

const Post = ({ post }: PostProps) => {

  const bioAuthor = 'Dev Apaixonado por Tecnologia & Educação! Evolua rápido como a tecnologia, aprendizado é contínuo e sempre haverá um próximo nível. Boost Yourself! 🚀'

  return (
    <Layout pageType="primary">
      <Section>
        <Head title={post.title} ogImage={post.ogImage.url} />
        <Header
          title={post.title}
          date={post.date}
          readTime={post.readTime}
          summary={post.summary}
          slug={post.slug}
        />
        <Article
          content={post.content}
          thumbnail={post.coverImage}
          title={post.title}
        />
        <Footer>
          <PostReaction tags={post.tags} slug={post.slug} />
          <Author name={post.author.name} src="/assets/author/lucas-transparent.png" subtitle={bioAuthor} large/>
        </Footer>
      </Section>
    </Layout>
  );
};

export default Post;
