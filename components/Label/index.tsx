import style from "./style.module.css";

type Props = {
  children: React.ReactNode;
  size?: string;
};

const Label = ({ children, size }: Props) => {
  return (
    <>
    <span className={`${style.label} ${style[`${size ? size : null}`]}`}>
      {children}
    </span>
    </>
  );
};

export default Label;
