import Link from "@/components/UI/Atoms/Link";
import styles from "./style.module.css";


function Navbar() {
  
  return (
    <nav className={styles.navbar}>
      <ul>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="10" cy="10" r="7"></circle>
          <line x1="21" y1="21" x2="15" y2="15"></line>
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
