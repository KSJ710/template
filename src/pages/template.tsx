/* eslint-disable tailwindcss/no-custom-classname */
import React, { createContext, useState } from 'react';
import Temp00001 from 'src/components/templates/Temp00001';
import EditToolBox from 'src/components/edit_tools/EditToolBox';

export const EditContext = createContext({} as EditVar);

const Template = (): JSX.Element => {
  const [currentTrget, setCurrentTarget] = useState<HTMLElement | null>(null);
  const [display, setDisplay] = useState<classDisplay>('display-none');
  const editVar: EditVar = {
    currentTarget: currentTrget,
    setCurrentTarget: setCurrentTarget,
    display: display,
    setDisplay: setDisplay,
  };

  return (
    <EditContext.Provider value={editVar}>
      <div className="box">
        <i className="box">aaa</i>
        <i className="m-10 gg-adidas"></i>
        <i className="gg-add-r"></i>
      </div>
      <EditToolBox />
      <Temp00001 />
    </EditContext.Provider>
  );
};

export default Template;
