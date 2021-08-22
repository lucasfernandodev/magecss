import Container from "@/components/UI/Atoms/Container";
import Head from "@/components/Utils/Head";
import Empty from "@/components/UI/Molecules/Empty";
import Layout from "@/components/Utils/Layout";

const BackendTemplate = () => {
  return (
    <Layout>
      <Head title="Backend" />

      <Container><Empty /></Container>
    </Layout>
  );
};

export default BackendTemplate;
