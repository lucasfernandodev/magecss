import { AppProps } from 'next/app'
import '../styles/reset/style.css';


import '../styles/config/typography.css';
import '../styles/config/scrollbar.css';
import '../styles/variaveis/sizes.css';
import '../styles/variaveis/colors.css';

import '../styles/global/ghostStyle.css';
import '../styles/global/prismTheme.css';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
