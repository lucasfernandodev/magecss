import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/Container";
import styles from "../styles/pages/about.module.css";
import Section from "../components/Section";
import Header from "../components/Section/Header";
import Article from "../components/Section/Article";

export default function Sobre() {
  return (
    <>
      <Layout>
        <Head>
          <title>Sobre mim - Luca Fernando</title>
        </Head>

        <Section>
          <Header
            page={true}
            title="Sobre mim - Lucas Fernando"
            subtitle="Desenvolvedor front-end freelancer, apaixonado desenvolvimento
                web e café."
          ></Header>
          <Article content='false' >
            <p>
              Meu nome é Lucas Fernando, tenho 20 anos e sou desenvolvedor web
              freelancer, apaixonado por programação e cafe.
            </p>
            <p>
              Depois de conhecer a programação e suas possibilidades, comecei a
              estudar tecnologias front-end e back-end, buscando sempre aprender
              novas tecnologias e inovar nos desenvolvimentos dos meus projetos.
            </p>
            <p>
              Como a tecnologia está sempre evoluindo e inovando, procuro sempre
              aprender novas tecnologias e desenvolver minhas tecnologias.
            </p>
          </Article>
        </Section>
      </Layout>
    </>
  );
}
