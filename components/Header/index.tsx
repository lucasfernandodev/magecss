import Link from "next/link";
import Navbar from "../Navbar";
import Container from "../Container";
import styles from "./style.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__content}>
          <h1>
            <Link href="/">
              <div className={styles.header__brand}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.75"
                  stroke="var(--color-primary)"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <defs />
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <path d="M9 3h6M10 9h4M10 3v6L6 20a.7.7 0 00.5 1h11a.7.7 0 00.5-1L14 9V3" />
                </svg>
                <a>Mage Css</a>
              </div>
            </Link>
          </h1>
          <Navbar />
        </div>
      </Container>
    </header>
  );
}
