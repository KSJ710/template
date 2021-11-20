import React from 'react';
import { useRecoilValue } from 'recoil';
import { tplHeadNumberState } from 'src/states/atoms/tplAtoms';
import * as HeadBulk from 'src/components/templates/layout_parts/headers/index';
import styles from './Head.module.scss';

const Head = (): JSX.Element => {
  const curtTplHeadNum = useRecoilValue(tplHeadNumberState);
  let tplHeadNum = 1;
  for (let key in HeadBulk) {
    if (HeadBulk.hasOwnProperty(key)) {
      if (tplHeadNum == curtTplHeadNum) {
        const Head = HeadBulk[key];
        return <Head />;
      }
      headNum++;
    }
  }
};

export default Head;
