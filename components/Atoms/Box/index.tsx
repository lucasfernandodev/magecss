import CSS from "csstype";
import styles from "./style.module.css";

type BoxProp = {
  direction?: CSS.Property.FlexDirection;
  alignItens?: CSS.Property.AlignItems;
  justifyContent?: CSS.Property.JustifyContent;
  gap?: CSS.Property.Gap;
  children: React.ReactNode;
  width?: CSS.Property.Width;
  display?: CSS.Property.Display;
};


const Box = ({ direction, alignItens, justifyContent, children, gap, width, display}: BoxProp) => {
  const style: CSS.Properties = {
    display: display ?? 'flex',
    flexDirection: direction ?? 'row',
    alignItems: alignItens ?? 'flex-start',
    justifyContent: justifyContent ?? 'flex-start',
    gap: gap ?? 0,
    width: width ?? 'fit-content'
  };


  return (
    <div className={styles.box} style={style}>
      {children}
    </div>
  );
};

export default Box;
