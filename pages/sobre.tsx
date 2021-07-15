import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/Container";
import Header from "../components/Header";

import styles from "../styles/pages/about.module.css";

export default function Sobre() {
  return (
    <>
      <Layout>
        <Head>
          <title>Sobre mim - Luca Fernando</title>
        </Head>

        <Container>
          <Header />
        </Container>
        <section className="section-sobre">
          <div className={styles.containerAuthor}>
            <div className={styles.containerAuthor__header}>
              <h1>Sobre mim - Lucas Fernando</h1>
              <p>
                Desenvolvedor front-end freelancer, apaixonado desenvolvimento
                web e café.
              </p>
            </div>
            <Container>
              <div className={styles.containerAuthor__body}>
                <p>
                  Meu nome é Lucas Fernando, tenho 20 anos e sou desenvolvedor
                  web freelancer, apaixonado por programação e cafe.
                </p>
                <p>
                  Depois de conhecer a programação e suas possibilidades,
                  comecei a estudar tecnologias front-end e back-end, buscando
                  sempre aprender novas tecnologias e inovar nos
                  desenvolvimentos dos meus projetos.
                </p>
                <p>
                  Como a tecnologia está sempre evoluindo e inovando, procuro
                  sempre aprender novas tecnologias e desenvolver minhas
                  tecnologias.
                </p>
              </div>
            </Container>
          </div>
        </section>
      </Layout>
    </>
  );
}
