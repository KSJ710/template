import React, { createContext, useState } from 'react';
import Temp00001 from 'src/components/templates/Temp00001';
import EditToolBox from 'src/components/edit_tools/EditToolBox';

export const EditContext = createContext({} as EditVar);

const Template = (): JSX.Element => {
  const [currentTrget, setCurrentTarget] = useState<HTMLElement | null>(null);
  const [display, setDisplay] = useState<classDisplay>('hidden');
  const editVar: EditVar = {
    currentTarget: currentTrget,
    setCurrentTarget: setCurrentTarget,
    display: display,
    setDisplay: setDisplay,
  };

  return (
    <>
      <EditContext.Provider value={editVar}>
        <EditToolBox />
        <Temp00001 />
      </EditContext.Provider>
    </>
  );
};

export default Template;
