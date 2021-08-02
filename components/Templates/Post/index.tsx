import Section from "@/Atoms/Section";
import Header from "@/Organisms/PostHeader";
import Article from "@/Organisms/PostBody";
import Footer from "@/Organisms/PostFooter";
import Layout from "@/Molecules/Layout";
import Head from "@/Atoms/Head";

import PostAuthor from "@/Molecules/PostAuthor";
import PostReaction from "@/Organisms/PostReaction";
import PostType from "../../../types/post";

type PostProps = {
  post: PostType;
};

const Post = ({ post }: PostProps) => {
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
          <PostAuthor />
        </Footer>
      </Section>
    </Layout>
  );
};

export default Post;
