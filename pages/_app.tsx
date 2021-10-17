import type { AppProps /*, AppContext */ } from "next/app"
import "styles/global.scss"
import Layout from "components/layout/Layout"

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
