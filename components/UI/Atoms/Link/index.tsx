import NextLink from 'next/link';
import styles from './style.module.css';
type LinkProp = {
  href: string,
  as?: string,
  children: React.ReactNode,
  onClick?: () => void
}

const Link: React.FC<LinkProp> = ({href,as, children,onClick}) => {
  return(
    <NextLink as={as} href={href} passHref>
      <a onClick={onClick} className={styles.link}>
        {children}
      </a>
    </NextLink>
  )
};

export default Link;