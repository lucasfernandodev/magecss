import Link from "next/link";
import Navbar from "../Navbar";
import styles from "./style.module.css";
export default function Header (){
  return (
    <header className={styles.header}>
      <h2>
        <img src='/assets/blog/favicon.svg' className='brand'/>
        <Link href="/">
          <a>Mage Css</a>
        </Link>
      </h2>
      <Navbar />
    </header>
  );
};
