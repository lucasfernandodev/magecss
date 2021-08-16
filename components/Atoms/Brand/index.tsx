import Link from "@/Atoms/Link";
import styles from "./style.module.css";

const Brand = () => {
  return (
    <div className={styles["brand"]}>
      <Link href="/">
        <h1 className={styles["brand__title"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.75"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19 6.873a2 2 0 0 1 1 1.747v6.536a2 2 0 0 1 -1.029 1.748l-6 3.833a2 2 0 0 1 -1.942 0l-6 -3.833a2 2 0 0 1 -1.029 -1.747v-6.537a2 2 0 0 1 1.029 -1.748l6 -3.572a2.056 2.056 0 0 1 2 0l6 3.573z"></path>
          </svg>
          <span>MAGE CSS</span>
        </h1>
      </Link>
    </div>
  );
};

export default Brand;
