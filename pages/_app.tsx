import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/css/globals.css";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
