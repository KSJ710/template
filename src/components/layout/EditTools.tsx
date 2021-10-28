import React, { useContext } from 'react';
import Background from 'src/components/edit_tools/Background';
import { EditContext } from 'src/pages/template';

const EditTools = (): JSX.Element => {
  const editVar: EditVar = useContext(EditContext);
  return (
    <div className={`${editVar.display}`}>
      <div>背景</div>
      <div>効果</div>
      <div>枠線</div>
      <Background />
    </div>
  );
};

export default EditTools;
