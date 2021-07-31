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
  <div className={
    `
    ${styles.container}
    ${alignX ? styles[`align-x-${alignX}`] : null}
    ${alignY ? styles[`align-y-${alignY}`] : null}
    ${display ? styles[`display-${display}`] : null}
    ${overflow ? styles[`overflow-${overflow}`] : null}
    ${direction ? styles[`direction-${direction}`] : null}
    ${wrap ? styles[`wrap-${wrap}`] : null}
    `
    }>
    {children}
  </div>
  )
}

export default Container
