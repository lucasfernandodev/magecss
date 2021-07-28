import style from "./style.module.css";

type Props = {
  children: React.ReactNode;
  size?: string;
};

const Label = ({ children , size}: Props) => {
  return <div className={`${style.label} ${style[`${size ? size : ''}`]}`}>{children}</div>;
};

export default Label;
