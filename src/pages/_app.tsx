import type { AppProps /*, AppContext */ } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';
import 'src/styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
