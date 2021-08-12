import style from "./style.module.css";
import { useState, useEffect } from "react";

interface Tab {
  [key: string] : boolean
}
const FeedMenu = () => {
  const [refresh, useRefresh] = useState(false);
  const [stateTab, setStateTab] = useState<Tab>({
    Feed: true,
    Recente: false,
    MaisVistos: false,
  });

  const ToggleTab = (e: string) => {
    const refreshToggle = refresh === true ? false : true;
    useRefresh(refreshToggle);

    Object.keys(stateTab).forEach((key) => {
      
      let array: Tab = stateTab;

      if (key == e) {
        array[key] = true;
      }else{
        array[key] = false;
      }
      setStateTab(array)

    });

  }

  useEffect(() => {
  },[refresh])

  return (
    <nav className={style.feedMenu}>
      <ul>
        <li data-active={stateTab.Feed} onClick={() => ToggleTab("Feed")}>Feed</li>
        <li data-active={stateTab.Recente} onClick={() => ToggleTab("Recente")}>Recente</li>
        <li data-active={stateTab.MaisVistos} onClick={() => ToggleTab("MaisVistos")}>Mais vistos</li>
      </ul>
    </nav>
  );
};

export default FeedMenu;
