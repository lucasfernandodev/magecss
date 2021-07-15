import { ReactNode, FunctionComponent } from 'react'
import styles from './style.module.css';
type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>
}

export default Container
