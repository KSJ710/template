import React from 'react';
import { useRecoilValue } from 'recoil';
import { tempHeadNumberState } from 'src/states/atoms/tempAtoms';
import * as BaseBulk from 'src/components/templates/layout_parts/bases/index';
import styles from './Base.module.scss';

const Head = (): JSX.Element => {
  // const state = useRecoilValue(tempHeadNumberState);
  let count = 1;
  for (let key in BaseBulk) {
    if (BaseBulk.hasOwnProperty(key)) {
      if (count == 1) {
        const Base = BaseBulk[key];
        return <Base />;
      }
      count++;
    }
  }
};

export default Head;
