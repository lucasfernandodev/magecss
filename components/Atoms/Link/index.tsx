import NextLink from 'next/link';
import styles from './style.module.css';
type LinkProp = {
  href: string,
  as?: string,
  children: React.ReactNode
}

const Link  = ({href,as, children}: LinkProp) => {
  return(
    <NextLink href={href} as={as} passHref>
      <a className={styles.link}>
      {children}
      </a>
    </NextLink>
  )
};

export default Link;