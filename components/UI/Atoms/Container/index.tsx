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
}

const Container = ({ children, alignX,direction, alignY, display, overflow, wrap }: Props) => {
  return (
  <div className={ `
    ${styles.container}
    ${alignX ? styles[`align-x-${alignX}`] : ""}
    ${alignY ? styles[`align-y-${alignY}`] : ""}
    ${display ? styles[`display-${display}`] : ""}
    ${overflow ? styles[`overflow-${overflow}`] : ""}
    ${direction ? styles[`direction-${direction}`] : ""}
    ${wrap ? styles[`wrap-${wrap}`] : ""}
    `
    }>
    {children}
  </div>
  )
}

export default Container
