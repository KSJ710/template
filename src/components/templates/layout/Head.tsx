import React from 'react';
import { useRecoilValue } from 'recoil';
import { tplHeadNumberState } from 'src/states/atoms/tplAtoms';
import * as HeadBulk from 'src/components/templates/layout_parts/headers/index';
import styles from './Head.module.scss';

const Head = (): JSX.Element => {
  const state = useRecoilValue(tplHeadNumberState);
  let headNum = 1;
  for (let key in HeadBulk) {
    if (HeadBulk.hasOwnProperty(key)) {
      if (headNum == state) {
        const Head = HeadBulk[key];
        return <Head />;
      }
      headNum++;
    }
  }
};

export default Head;
