import type { AppProps /*, AppContext */ } from 'next/app';
import 'src/styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
