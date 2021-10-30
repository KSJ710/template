import React, { useContext } from 'react';
import Background from 'src/components/edit_tools/BackgroundColor';
import { EditContext } from 'src/pages/template';
import styles from './EditTools.module.scss';

const EditToolBox = (): JSX.Element => {
  const editVar: EditVar = useContext(EditContext);
  return (
    <div className={`${editVar.display} ${styles.editToolBox} ${styles.aaa} w-full`}>
      <Background />
    </div>
  );
};

export default EditToolBox;
