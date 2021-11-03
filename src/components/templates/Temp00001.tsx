import React, { useContext } from 'react';
import styles from './Temp00001.module.scss';
import Nav from 'src/components/template_parts/navigation/Nav00001';
import { TempEditContext } from 'src/pages/template';

const Temp00001 = (props): JSX.Element => {
  const editVar = useContext(TempEditContext);
  const toggleEditTools = (e) => {
    editVar.setCurrentTarget(e.currentTarget);
    editVar.display == 'display-none'
      ? editVar.setDisplay('display-block')
      : editVar.setDisplay('display-none');
  };

  const box = '500px';
  const aaa = 'aaa';
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
      <i className={`${styles['gg-attribution']}  ccc-in-js ${styles['bbb']} ${styles[aaa]}`}></i>

      <style jsx>{``}</style>
    </>
  );
};

export default Temp00001;
