import React, { useContext } from 'react';
import Background from 'src/components/edit_tools/Background';
import { EditContext } from 'src/pages/template';

const EditTools = () => {
  const editVar = useContext(EditContext);
  const set = () => {
    editVar.currentTarget.style.backgroundColor = '#aaaaaa';
  };
  return (
    <div onClick={set} style={{ display: `${editVar.display}` }}>
      <Background />
    </div>
  );
};

export default EditTools;
