/* eslint-disable tailwindcss/no-custom-classname */
import React, { createContext, useState } from 'react';
import Temp00001 from 'src/components/templates/Temp00001';
import EditToolBox from 'src/components/edit_tools/EditToolBox';

export const TempEditContext = createContext({} as TempEditVar);

const Template = (): JSX.Element => {
  const [currentTrget, setCurrentTarget] = useState<HTMLElement | null>(null);
  const [display, setDisplay] = useState<classDisplay>('none');
  const tempEditVar: TempEditVar = {
    currentTarget: currentTrget,
    setCurrentTarget: setCurrentTarget,
    display: display,
    setDisplay: setDisplay,
  };

  return (
    <TempEditContext.Provider value={tempEditVar}>
      <EditToolBox />
      <Temp00001 />
    </TempEditContext.Provider>
  );
};

export default Template;
