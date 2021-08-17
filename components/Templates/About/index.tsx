import Layout from "@/components/UI/Molecules/Layout";
import Head from "@/components/UI/Atoms/Head";
import Section from "@/components/UI/Atoms/Section";
import Header from "@/components/UI/Organisms/Header";
import Container from "@/components/UI/Atoms/Container";
import Title from "@/components/UI/Atoms/Title";
import Summary from "@/components/UI/Atoms/Summary";
import Divider from "@/components/UI/Atoms/Divider";
import Text from "@/components/UI/Atoms/Text";

const AboutTemplate = () => {
  return (
    <Layout pageType="primary">
      <Head title="Sobre mim" />

      <Section>
        <Header align="center">
          <Title variant="h1">Conheça um pouco sobre mim e o blog</Title>
          <Summary>
            Esse é um blog experimental que criei para compartilhar um pouco de
            conhecimento sobre from-end e ao mesmo tempo brincar com algumas
            tecnologias como o next.js.
          </Summary>
        </Header>
        <Divider space="large" type="space" />
        <Container>
          <Text>
            Meu nome é Lucas Fernando, tenho 20 anos e sou desenvolvedor web
            freelancer, apaixonado por programação e cafe.
          </Text>
          <Text>
          Esse blog é um projeto desenvolvido com next.js e Typescript com o intuído de aprender mais sobre essas tecnologias
          e em conjuntura desenvolver  um blog para ensinar e compartilhar conhecimentos e ideias de Frontend.
          </Text>
          <Text>
            Por aqui esterei testando algumas ideias e aprendizados e os compartilhando em forma de artigo.
          </Text>
        </Container>
        <Divider space="large" type="space" />
      </Section>
    </Layout>
  );
};

export default AboutTemplate;
