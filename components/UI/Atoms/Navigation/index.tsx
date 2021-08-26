import styles from "./style.module.css";
import Link from "@/Atoms/Link";

type NavigationProp = {
  visibility?: boolean;
};
const Navigation: React.FC<NavigationProp> = ({ visibility }) => {
  return (
    <ul
      className={styles.navigation}
      data-navigation={visibility && visibility}
      role="navigation"
    >
      <li>
        <Link href="/">Inicio</Link>
      </li>
      <li>
        <Link href="/posts/">Postagens</Link>
      </li>
      <li>
        <Link href="/frontend/">Frontend</Link>
      </li>
      <li>
        <Link href="/laboratorio/">Laboratório</Link>
      </li>
    </ul>
  );
};

export default Navigation;
