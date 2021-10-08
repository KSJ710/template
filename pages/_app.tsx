import type { AppProps /*, AppContext */ } from "next/app"
import "styles/css/global.css"
import Layout from "components/layout/Layout"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
