import style from "./style.module.css";
import Label from "../../Atoms/Label";

const ReadTime = ({time} : {time : string}) => {
  return (
    <Label icon="time" text={` ${time} min de leitura`} />
  );
};

export default ReadTime;
