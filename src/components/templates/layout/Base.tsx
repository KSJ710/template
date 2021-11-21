import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentTargetState, editToolsDisplayState } from 'src/states/atoms/tamplate_atoms';
import * as BaseBulk from 'src/components/templates/layout_parts/bases/index';
import styles from './Base.module.scss';

const Head = (): JSX.Element => {
  const setCurrentTarget = useSetRecoilState(currentTargetState);
  const [editToolDisplay, setEditToolsDisplay] = useRecoilState(editToolsDisplayState);

  const handleToggleEditTools = (e) => {
    e.stopPropagation();
    setCurrentTarget(e.currentTarget);
    editToolDisplay == 'none' ? setEditToolsDisplay('flex') : setEditToolsDisplay('none');
  };

  let count = 1;
  for (let key in BaseBulk) {
    if (BaseBulk.hasOwnProperty(key)) {
      if (count == 1) {
        const Base = BaseBulk[key];
        return <Base handleToggleEditTools={handleToggleEditTools} />;
      }
      count++;
    }
  }
};

export default Head;
