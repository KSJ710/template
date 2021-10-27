import React, { useContext } from 'react';
import Background from 'src/components/edit_tools/Background';
import { EditContext } from 'src/pages/template';

const EditTools = () => {
  const editVar: EditVar = useContext(EditContext);
  return (
    <div style={{ display: `${editVar.display}` }}>
      <Background />
    </div>
  );
};

export default EditTools;
