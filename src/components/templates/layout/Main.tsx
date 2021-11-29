import React from 'react';
import { useRecoilValue } from 'recoil';
import { tplHeadNumberState } from 'src/states/atoms/tamplate_atoms';
import * as MainBulk from 'src/components/templates/layout_parts/main/index';
import styles from './Main.module.scss';

const Head = (): JSX.Element => {
  const curtTplHeadNum = useRecoilValue(tplHeadNumberState);

  let tplHeadNum = 1;
  for (let key in MainBulk) {
    if (MainBulk.hasOwnProperty(key)) {
      if (tplHeadNum == curtTplHeadNum) {
        const Main = MainBulk[key];
        return <Main />;
      }
      tplHeadNum++;
    }
  }
};

export default Head;
