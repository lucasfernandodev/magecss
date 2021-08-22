import Head from "@/components/UI/Atoms/Head";
import Link from "@/components/UI/Atoms/Link";
import Title from "@/components/UI/Atoms/Title";
import Layout from "@/components/UI/Molecules/Layout";
import Router from 'next/router'
import styles from "./style.module.css";
type Props = {
  code: string;
};
const ErrorTemplate: React.FC<Props> = ({ code }) => {

  return (
    <Layout simply={true}>
      <Head title="Pagina não encontrada" />

      <div className={styles.error}>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src="/assets/error.svg" alt="error" />
          </div>
          <div className={styles.msg}>
            <Title variant="h2">
            Não foi possível encontrar essa página. Voltar a
              <Link onClick={() => Router.back()} href="/" > pagina anterior</Link>.
            </Title>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorTemplate;
