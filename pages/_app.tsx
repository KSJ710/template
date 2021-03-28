import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/css/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
