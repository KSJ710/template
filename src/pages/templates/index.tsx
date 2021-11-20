import React, { createContext } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentTargetState, editToolsDisplayState } from 'src/states/atoms/tamplate_atoms';
import Base from 'src/components/templates/layout/Base';
import EditTools from 'src/components/edit_tools/EditTools';

const Index = (): JSX.Element => {
  const setCurrentTarget = useSetRecoilState(currentTargetState);
  const [editToolDisplay, setEditToolsDisplay] = useRecoilState(editToolsDisplayState);

  const hundleToggleEditTools = (e) => {
    e.stopPropagation();
    setCurrentTarget(e.currentTarget);
    editToolDisplay == 'none' ? setEditToolsDisplay('flex') : setEditToolsDisplay('none');
  };

  return (
    <HundleContext.Provider value={hundleToggleEditTools}>
      <EditTools />
      <Base />
    </HundleContext.Provider>
  );
};

export const HundleContext = createContext({} as React.MouseEventHandler<HTMLUListElement>);
export default Index;
