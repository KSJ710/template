import type { AppProps /*, AppContext */ } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'src/styles/global.scss';

// fasのFontAwesomeIconコンポネントを全体で使用できる下記参照
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
library.add(fab, fas);

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
