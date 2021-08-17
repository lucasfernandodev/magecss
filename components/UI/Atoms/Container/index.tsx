import { ReactNode, FunctionComponent } from 'react'
import styles from './style.module.css';
type Props = {
  children?: ReactNode;
  alignX?: string;
  alignY?: string;
  display?: string;
  overflow?: string;
  wrap?: string;
  direction?: string;
  gap?: number;
}

const Container = ({ children, alignX,direction, alignY, display, overflow, wrap, gap }: Props) => {

  return (
  <div style={{gap:`${gap}px` }}className={ `
    ${styles.container}
    ${alignX ? styles[`align-x-${alignX}`] : " "}
    ${alignY ? styles[`align-y-${alignY}`] : " "}
    ${display ? styles[`display-${display}`] : " "}
    ${overflow ? styles[`overflow-${overflow}`] : " "}
    ${direction ? styles[`direction-${direction}`] : " "}
    ${wrap ? styles[`wrap-${wrap}`] : ""}
    `
    }>
    {children}
  </div>
  )
}

export default Container
