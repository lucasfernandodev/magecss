import { AppProps } from 'next/app'
import '../styles/reset/style.css';
import '../styles/config/root.css';
import '../styles/config/typography.css';
import '../styles/config/scrollbar.css';

import '../styles/global.css';
import '../styles/config/colors.css';
import '../styles/config/code.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
