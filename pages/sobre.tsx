import Layout from "../components/layout";
import Head from "../components/Layout/Head";
import Section from "../components/Section";
import Header from "../components/Header";
import Container from "../components/Layout/Container";
import Title from "../components/Title";
import Summary from "../components/Summary";
import Divider from "../components/Layout/Divider";
import Text from "../components/Text";

export default function Sobre() {
  return (
      <Layout pageType="primary">
        <Head title="Sobre mim" />

        <Section>
          <Header align="center">
            <Title variant="h1">Saiba um puco sobre o site e sobre mim</Title>
            <Summary>
              Esse é um blog experimental que criei para compartilhar um pouco
              de conhecimento sobre from-end e ao mesmo tempo brincar com
              algumas tecnologias como o next.js.
            </Summary>
          </Header>
          <Divider space="large" type="space" />
          <Container>
            <Text>
              Meu nome é Lucas Fernando, tenho 20 anos e sou desenvolvedor web
              freelancer, apaixonado por programação e cafe.
            </Text>
            <Text>
              Depois de conhecer a programação e suas possibilidades, comecei a
              estudar tecnologias front-end e back-end, buscando sempre aprender
              novas tecnologias e inovar nos desenvolvimentos dos meus projetos.
            </Text>
            <Text>
              Como a tecnologia está sempre evoluindo e inovando, procuro sempre
              aprender novas tecnologias e desenvolver minhas tecnologias.
            </Text>
          </Container>
          <Divider space="large" type="space" />
        </Section>
      </Layout>
  );
}
