import NextLink from 'next/link';
import styles from './style.module.css';
type LinkProp = {
  href: string,
  as?: string,
  children: React.ReactNode,
  onClick?: () => void
}

const Link  = ({href,as, children,onClick}: LinkProp) => {
  return(
    <NextLink href={href} as={as} passHref>
      <a onClick={onClick} className={styles.link}>
      {children}
      </a>
    </NextLink>
  )
};

export default Link;