import Icon from "../../Utils/Icon";
import style from "./style.module.css";

type Props = {
  size?: string;
  icon?: string;
  text: string
};

const Label = ({size, text, icon }: Props) => {
  return (

    <div className={`${style.label}`}>
      <span className={style.label__icon}>
        {icon ? <Icon width={20} height={20} icon={icon} stroke="var(--color-info)"/> : null}
      </span>
      <span className={style.label__text}>{text}</span>
    </div>

  );
};

export default Label;
