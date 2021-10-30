import type { AppProps /*, AppContext */ } from 'next/app';
// import 'src/styles/tailwind-util.css';
// import 'src/styles/tailwind.css';
import 'src/styles/global.scss';
import 'src/styles/dinamic_class.scss';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
