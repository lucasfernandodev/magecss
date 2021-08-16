import style from "./style.module.css";
import { useContext, useState, useEffect } from "react";
import FeedContext from '@/components/Context/Feed';






const FeedMenu = () => {
  const {Tab ,changeTab} = useContext(FeedContext);
  const [stateTab, setStateTab] = useState('Feed');


  const ToggleTab = (e: string) => {
    changeTab(e);
    if(e !== stateTab){
      setStateTab(e);
    }

  }

  return (
    <nav className={style.feedMenu}>
      <ul>
        <li data-active={stateTab === "Feed" ? true : false} onClick={() => ToggleTab("Feed")}>Feed</li>
        <li data-active={stateTab === "MaisVistos" ? true : false} onClick={() => ToggleTab("MaisVistos")}>Mais vistos</li>
      </ul>
    </nav>
  );
};

export default FeedMenu;
