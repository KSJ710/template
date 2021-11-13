/* eslint-disable tailwindcss/no-custom-classname */
import React, { createContext, useContext, useState } from 'react';
import { useRecoilState } from 'recoil';
import Temp from 'src/components/templates/Temp_1';
import styles from './Temp_1.module.scss';
import EditTools from 'src/components/edit_tools/EditTools';
import { currentTargetState, editToolsDisplayState } from 'src/states/atoms/tempAtoms';

export const TempEditContext = createContext({} as TempEditVar);

const Template = (): JSX.Element => {
  const [currentTarget, setCurrentTarget] = useRecoilState(currentTargetState);
  const [editToolDisplay, setEditToolsDisplay] = useRecoilState(editToolsDisplayState);
  const hundleToggleEditTools = (e) => {
    setCurrentTarget(e.currentTarget);
    editToolDisplay == 'none' ? setEditToolsDisplay('flex') : setEditToolsDisplay('none');
  };
  // const [currentTrget, setCurrentTarget] = useRecoilState(currentTrgetState);
  // const [display, setDisplay] = useState<classDisplay>('none');
  // const tempEditVar: TempEditVar = {
  //   currentTarget: currentTrget,
  //   setCurrentTarget: setCurrentTarget,
  //   display: display,
  //   setDisplay: setDisplay,
  // };
  // const editVar = useContext(TempEditContext);
  // const toggleEditTools = (e) => {
  //   editVar.setCurrentTarget(e.currentTarget);
  //   editVar.display == 'none' ? editVar.setDisplay('block') : editVar.setDisplay('none');
  // };

  return (
    // <TempEditContext.Provider value={tempEditVar}>
    <>
      <EditTools />
      <div className={styles.grid}>
        <header className={styles.header} onClick={hundleToggleEditTools}></header>
        <main className={styles.main} onClick={hundleToggleEditTools}></main>
        <aside className={styles.sidebar} onClick={hundleToggleEditTools}></aside>
        <footer className={styles.footer} onClick={hundleToggleEditTools}></footer>
      </div>
    </>
    // </TempEditContext.Provider>
  );
};

export default Template;
