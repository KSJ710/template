import React from 'react';
import { useRecoilValue } from 'recoil';
import { tempHeadState } from 'src/states/atoms/tempAtoms';
import * as HeadBulk from 'src/components/templates/layout_parts/header/index';
import styles from './Head.module.scss';

const Head = (): JSX.Element => {
  const state = useRecoilValue(tempHeadState);
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

  return <div>load</div>;
};

export default Head;
