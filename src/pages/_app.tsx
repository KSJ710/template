import type { AppProps /*, AppContext */ } from 'next/app';
import { useSession } from 'next-auth/react';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Base from 'src/components/layout/Base';
import 'src/styles/global.scss';

// fasのFontAwesomeIconコンポネントを全体で使用できる下記参照
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
library.add(fab, fas);

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  return (
    <SessionProvider session={session}>
      {/* authがtrueになっているコンポーネントを認証する */}
      {Component.auth ? (
        <RecoilRoot>
          <Auth>
            <Base>
              <Component {...pageProps} />
            </Base>
          </Auth>
        </RecoilRoot>
      ) : (
        <RecoilRoot>
          <Base>
            <Component {...pageProps} />
          </Base>
        </RecoilRoot>
      )}
    </SessionProvider>
  );
}

function Auth({ children }) {
  const { data: session } = useSession({ required: true });
  const isUser = !!session?.user;

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}
