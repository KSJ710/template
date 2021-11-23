import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  currentLayoutPart,
  currentTargetState,
  editToolsDisplayState,
} from 'src/states/atoms/tamplate_atoms';
import Base from 'src/components/templates/layout/Base';
import EditTools from 'src/components/templates/edit_tools/EditTools';

const Index = (): JSX.Element => {
  const setCurrentTarget = useSetRecoilState(currentTargetState);
  const setCurtLayPart = useSetRecoilState(currentLayoutPart);
  const [editToolDisplay, setEditToolsDisplay] = useRecoilState(editToolsDisplayState);

  const handleToggleEditTools = (e) => {
    e.stopPropagation();
    setCurrentTarget(e.currentTarget);

    const className: string = e.currentTarget.className;
    const targetPart = className.match(/_track_lay_part_.*$/)[0].substr(16);
    setCurtLayPart(targetPart);

    editToolDisplay == 'none' ? setEditToolsDisplay('flex') : setEditToolsDisplay('none');
  };

  return (
    <HandleContex.Provider value={handleToggleEditTools}>
      <Base />
      <EditTools />
    </HandleContex.Provider>
  );
};

export const HandleContex = React.createContext(
  {} as (event: React.MouseEvent<HTMLElement>) => void
);
export default Index;
