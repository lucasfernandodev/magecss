import styles from "./style.module.css";
import Container from "@/components/UI/Atoms/Container";
import Brand from "@/components/UI/Atoms/Brand";
import Link from "@/components/UI/Atoms/Link";
import Icon from "@/components/Utils/Icon";
import Navigation from "../../Atoms/Navigation";
const PageFooter = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        
        <div className={styles.footer__align}>
          <Brand />
          <Navigation />

          <ul className="container-social">
            <li>
              <Link href="https://github.com/lucasfernandodev">
                <Icon icon="github" />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/lucasfernandodev/">
              <Icon icon="instagram" />
              </Link>
            </li>
          </ul>

        </div>

        <div className={styles.footer__copyright}>
          Desenvolvido com ❤️ por Lucas
          Fernando.
        </div>
      </Container>
    </footer>
  );
};

export default PageFooter;
