import type { AppProps /*, AppContext */ } from 'next/app';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { RecoilRoot } from 'recoil';
import 'src/styles/global.scss';

library.add(fas);

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
