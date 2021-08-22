import cn from "classnames";
import styles from "./style.module.css";
type Props = {
  alignX?: string;
  alignY?: string;
  display?: string;
  overflow?: string;
  wrap?: string;
  direction?: string;
  gap?: number;
};

const Container: React.FC<Props> = ({
  children,
  alignX,
  direction,
  alignY,
  display,
  overflow,
  wrap,
  gap,
}) => {
  
  const classNamesContainer = cn(
    `${styles.container}`,
    `${typeof alignX != "undefined" ? styles[`align-x-${alignX}`] : ""}`,
    `${typeof alignY != "undefined" ? styles[`align-y-${alignY}`] : ""}`,
    `${typeof display != "undefined" ? styles[`display-${display}`] : ""}`,
    `${typeof overflow != "undefined" ? styles[`overflow-${overflow}`] : ""}`,
    `${
      typeof direction != "undefined" ? styles[`direction-${direction}`] : ""
    }`,
    `${typeof wrap != "undefined" ? styles[`wrap-${wrap}`] : ""}`
  );

  return (
    <div
      style={{ gap: `${typeof gap !== "undefined" ? gap : 0}px` }}
      className={classNamesContainer}
    >
      {children}
    </div>
  );
};

export default Container;
