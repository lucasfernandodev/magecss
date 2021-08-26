import Icon from "@/components/Utils/Icon";
import Navigation from "../../Atoms/Navigation";
import styles from "./style.module.css";

type NavbarProps = {
  navigationShow?: boolean;
}
const Navbar: React.FC<NavbarProps> = ({navigationShow})  => {
  
  return (
    <nav className={styles.navbar}>

     <Navigation visibility={navigationShow}/> 

      <div className={styles.search}>
        <button>
        <Icon icon="search" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
