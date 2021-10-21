import type { AppProps /*, AppContext */ } from 'next/app';
import 'src/styles/global.scss';
import Layout from 'src/components/layout/Layout';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
