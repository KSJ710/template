import React from 'react';
import { useRecoilValue } from 'recoil';
import { tempHeadNumberState } from 'src/states/atoms/tempAtoms';
import * as HeadBulk from 'src/components/templates/layout_parts/headers/index';
import styles from './Head.module.scss';

const Head = (): JSX.Element => {
  const state = useRecoilValue(tempHeadNumberState);
  let count = 1;
  for (let key in HeadBulk) {
    if (HeadBulk.hasOwnProperty(key)) {
      if (count == state) {
        console.log(state);
        const Head = HeadBulk[key];
        return <Head />;
      }
      count++;
    }
  }
};

export default Head;
