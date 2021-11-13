import React, { useContext } from 'react';
import styles from './Temp_1.module.scss';
import Nav from 'src/components/template_parts/navigation/Nav_1';
import { TempEditContext } from 'src/pages/template';

const Temp = (): JSX.Element => {
  const editVar = useContext(TempEditContext);
  const toggleEditTools = (e) => {
    editVar.setCurrentTarget(e.currentTarget);
    editVar.display == 'none' ? editVar.setDisplay('block') : editVar.setDisplay('none');
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

export default Temp;
