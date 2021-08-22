import Section from "@/components/UI/Atoms/Section";
import Header from "@/components/UI/Organisms/PostHeader";
import Article from "@/components/UI/Organisms/PostBody";
import Footer from "@/components/UI/Organisms/PostFooter";
import Layout from "@/components/Utils/Layout";
import Head from "@/components/Utils/Head";

import PostReaction from "@/components/UI/Organisms/PostReaction";
import PostType from "@/types/post";
import Author from "@/components/UI/Molecules/Author";
import CommentsTemplate from "../Comments";

type GhostProps = {
  post: PostType
}

const PostTemplate = ({ post }: GhostProps) => {
 

  return (
    <Layout pageType="primary">
      <Section>
        <Head title={post.title} ogImage={post.feature_image} />
        <Header
          title={post.title}
          date={post.published_at}
          summary={post.excerpt}
          slug={post.slug}
          reading_time={post.reading_time}
        />
        <Article
          content={post.html}
          thumbnail={post.feature_image}
          title={post.title}
        />
        <Footer>
          <PostReaction  slug={post.slug} tags={post.tags}/>
          <Author name={'Lucas Fernando'} src="/assets/author/lucas-transparent.png" large/>
        </Footer>
      </Section>
    </Layout>
  );
};

export default PostTemplate;
