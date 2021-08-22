import Container from "@/components/UI/Atoms/Container";
import Head from "@/components/UI/Atoms/Head";
import Empty from "@/components/UI/Molecules/Empty";
import Layout from "@/components/UI/Molecules/Layout";

const LaboratoryTemplate = () => {
  return (
    <Layout>
      <Head title="Laboratório" />

      <Container>
        <Empty />
      </Container>
    </Layout>
  );
};

export default LaboratoryTemplate;
