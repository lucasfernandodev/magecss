import HeroPost from "@/Organisms/PostFeatured";
import Layout from "@/Molecules/Layout";
import Head from "@/Atoms/Head";

import Post from "../../../types/post";
import Feed from "@/components/Organisms/Feed";

type HomeProps = {
  lastPost: Post;
  listPost: Post[];
};

const Home = ({ lastPost, listPost }: HomeProps) => {

  const post= [
    {
      title: " 7 recursos interessantes de javascript obsoletos",
      slug: "www.google.com",
      tag: "html5",
    },
    {
      title: " 7 recursos interessantes de javascript obsoletos",
      slug: "www.google.com",
      tag: "css",
    },
    {
      title: " 7 recursos interessantes de javascript obsoletos",
      slug: "www.google.com",
      tag: "Frontend",
    },
    {
      title: " 7 recursos interessantes de javascript obsoletos",
      slug: "www.google.com",
      tag: "Nextjs",
    },
  ];

  return (
    <Layout>
      <Head />
      
      {lastPost && (
        <HeroPost
          tags={lastPost.tags}
          title={lastPost.title}
          coverImage={lastPost.coverImage}
          date={lastPost.date}
          readTime={lastPost.readTime}
          slug={lastPost.slug}
          summary={lastPost.summary}
        />
      )}
    
      <Feed title="Postagens" listPost={listPost} listsPostByTag={post} />

    </Layout>
  );
};

export default Home;
