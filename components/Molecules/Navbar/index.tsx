import Link from "@/Atoms/Link";
import styles from "./style.module.css";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/sobre/">Sobre</Link>
        </li>
        <li>
          <Link href="https://lucasfernandodev.com.br">Portfólio</Link>
        </li>
        <li>
          <Link href="/posts/">Postagens</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
