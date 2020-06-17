import { Provider } from 'next-auth/client'
import './css/reset.css'
import './css/common.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const { session } = pageProps
  return (
    < Provider session={session} >
      <Component {...pageProps} />
    </Provider >
  )
}