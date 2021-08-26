import Brand from '../../Atoms/Brand';
import Navbar from "../../Molecules/Navbar";
import Container from "../../Atoms/Container";
import styles from "./style.module.css";
import Icon from '@/components/Utils/Icon';
import {useState} from 'react';
type Props = {
  bg?: string
}

export default function PageHeader({bg} : Props) {

  const [visibilityMenu, setVisibilityMenu] = useState<boolean>(false);

  function handlerNavigation(e : React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();
    if(visibilityMenu === false){
      setVisibilityMenu(true)
    }
    if(visibilityMenu === true){
      setVisibilityMenu(false)
    }
  }

  return (
    <header className={`${styles.header} ${bg == 'primary' ? styles['header--primary'] : ''}`}>
      <Container alignY="center" alignX="space-between">
          <div className={styles['group']} data-navigationVisivility={visibilityMenu}>
            <button className={styles['button-navigation']} onClick={(e) => handlerNavigation(e)}>
             {visibilityMenu === true ? <Icon icon="close" strokeWidth={2}/> : <Icon icon="menu"  strokeWidth={2}/>}
            </button>
            <Brand />
          </div>
          <Navbar navigationShow={visibilityMenu}/>
      </Container>
    </header>
  );
}
