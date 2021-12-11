import type { AppProps /*, AppContext */ } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'src/styles/global.scss';

// fasのFontAwesomeIconコンポネントを全体で使用できる
library.add(fas);

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
