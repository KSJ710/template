/* eslint-disable tailwindcss/no-custom-classname */
import React, { createContext } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentTargetState, editToolsDisplayState } from 'src/states/atoms/tempAtoms';
import Head from 'src/components/templates/layout/Head';
import styles from './Base.module.scss';

const Temp = (): JSX.Element => {
  const setCurrentTarget = useSetRecoilState(currentTargetState);
  const [editToolDisplay, setEditToolsDisplay] = useRecoilState(editToolsDisplayState);

  const hundleToggleEditTools = (e) => {
    e.stopPropagation();
    setCurrentTarget(e.currentTarget);
    editToolDisplay == 'none' ? setEditToolsDisplay('flex') : setEditToolsDisplay('none');
  };

  return (
    <HundleContext.Provider value={hundleToggleEditTools}>
      <div className={styles.grid}>
        <header className={styles.header}>
          <Head />
        </header>
        <main className={styles.main} onClick={hundleToggleEditTools}></main>
        <aside className={styles.sidebar} onClick={hundleToggleEditTools}></aside>
        <footer className={styles.footer} onClick={hundleToggleEditTools}></footer>
      </div>
    </HundleContext.Provider>
  );
};

export const HundleContext = createContext({} as React.MouseEventHandler<HTMLUListElement>);
export default Temp;
