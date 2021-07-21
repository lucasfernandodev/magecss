import { AppProps } from 'next/app'
import '../styles/config/root.css';
import '../styles/config/reset.css';
import '../styles/pre.css';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
