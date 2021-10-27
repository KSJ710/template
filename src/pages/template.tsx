import React, { createContext, useState } from 'react';
import Temp00001 from 'src/components/templates/Temp00001';
import EditTools from 'src/components/layout/EditTools';

export const EditContext = createContext({} as EditVar);

const Template = (): JSX.Element => {
  const [currentTrget, setCurrentTarget] = useState<HTMLElement | null>(null);
  const [display, setDisplay] = useState<string>('none');
  const [color, setColor] = useState<string>(null);
  const editVar: EditVar = {
    color: color,
    setColor: setColor,
    currentTarget: currentTrget,
    setCurrentTarget: setCurrentTarget,
    display: display,
    setDisplay: setDisplay,
  };

  return (
    <>
      <EditContext.Provider value={editVar}>
        <EditTools />
        <Temp00001 />
      </EditContext.Provider>
    </>
  );
};

export default Template;
