import Icon from "@/Utils/Icon";
import style from "./style.module.css";

type Props = {
  size?: number;
  icon?: string;
  text: string;
  style?: React.CSSProperties; 
};

const Label: React.FC<Props> = ({size, text, icon}) => {

  return (
    <div className={style.label}>
      <span className={style.label__icon}>
        {icon ? <Icon width={20} height={20} icon={icon} strokeWidth={2}/> : null}
      </span>
      <span className={style.label__text}>{text}</span>
    </div>

  );
};

export default Label;
