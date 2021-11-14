/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentTargetState, editToolsDisplayState } from 'src/states/atoms/tempAtoms';
import EditTools from 'src/components/edit_tools/EditTools';
import Nav from 'src/components/template_parts/navigation/Nav_1';
import styles from './Temp_1.module.scss';

const Template = (): JSX.Element => {
  const setCurrentTarget = useSetRecoilState(currentTargetState);
  const [editToolDisplay, setEditToolsDisplay] = useRecoilState(editToolsDisplayState);

  const hundleToggleEditTools = (e) => {
    e.stopPropagation();
    setCurrentTarget(e.currentTarget);
    editToolDisplay == 'none' ? setEditToolsDisplay('flex') : setEditToolsDisplay('none');
  };

  return (
    <>
      <EditTools />
      <div className={styles.grid}>
        <header className={styles.header}>
          <Nav hTgEitTls={hundleToggleEditTools} />
        </header>
        <main className={styles.main} onClick={hundleToggleEditTools}></main>
        <aside className={styles.sidebar} onClick={hundleToggleEditTools}></aside>
        <footer className={styles.footer} onClick={hundleToggleEditTools}></footer>
      </div>
    </>
  );
};

export default Template;
