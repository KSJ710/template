import React, { useContext } from 'react';
import styles from './Temp00001.module.scss';
import Nav from 'src/components/template_parts/navigation/Nav00001';
import { EditContext } from 'src/pages/template';

const Temp00001 = (): JSX.Element => {
  const editVar = useContext(EditContext);
  const toggleEditTools = (e) => {
    editVar.setCurrentTarget(e.currentTarget);
    editVar.display == 'hidden' ? editVar.setDisplay('block') : editVar.setDisplay('hidden');
  };

  return (
    <>
      <div className={styles.grid}>
        <header className={`${styles.header}`} onClick={toggleEditTools}>
          <Nav />
        </header>
        <main className={styles.main} onClick={toggleEditTools}></main>
        <aside className={styles.sidebar} onClick={toggleEditTools}></aside>
        <footer className={styles.footer} onClick={toggleEditTools}></footer>
      </div>
    </>
  );
};

export default Temp00001;
