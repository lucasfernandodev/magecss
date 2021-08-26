import Link from "@/components/UI/Atoms/Link";
import Icon from "@/components/Utils/Icon";
import styles from "./style.module.css";

type NavbarProps = {
  navigationShow?: boolean;
}
const Navbar: React.FC<NavbarProps> = ({navigationShow})  => {
  
  return (
    <nav className={styles.navbar}>

      <ul data-navigation={navigationShow && navigationShow} role="navigation">
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

      <div className={styles.search}>
        <button>
        <Icon icon="search" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
