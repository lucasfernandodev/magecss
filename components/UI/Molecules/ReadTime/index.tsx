import style from "./style.module.css";
import Label from "../../Atoms/Label";

type Props = {
  time : number
}
const ReadTime: React.FC<Props> = ({time}) => {
  return (
    <Label style={{color: 'red'}} icon="time" text={` ${time} min de leitura`} />
  );
};

export default ReadTime;
