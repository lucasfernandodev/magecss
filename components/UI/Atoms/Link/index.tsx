import NextLink from 'next/link';
import styles from './style.module.css';
import cn from 'classnames';

type LinkProp = {
  href: string,
  as?: string,
  children: React.ReactNode,
  onClick?: () => void,
  className?: string | undefined;
}

const Link: React.FC<LinkProp> = ({href,as, children,onClick, className,...arg}) => {

  const ClassName =  cn(styles.link, typeof className !== 'undefined' ? className : null);

  return(
    <NextLink as={as} href={href} passHref>
      <a onClick={onClick} className={ClassName} {...arg}>
        {children}
      </a>
    </NextLink>
  )
};

export default Link;