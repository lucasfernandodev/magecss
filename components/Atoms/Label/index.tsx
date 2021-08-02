import Icon from "../../Utils/Icon";
import style from "./style.module.css";

type Props = {
  size?: string;
  icon: string;
  text: string
};

const Label = ({size, text, icon }: Props) => {
  return (

    <div className={`${style.label}`}>
      <span className={style.label__icon}>
        <Icon icon={icon} stroke="var(--color-subtitle)"/>
      </span>
      <span className={style.label__text}>{text}</span>
    </div>

  );
};

export default Label;