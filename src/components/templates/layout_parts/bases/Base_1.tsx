import React, { useContext } from 'react';
import { HundleContext } from 'src/pages/templates/index';
import Head from 'src/components/templates/layout/Head';
import styles from './Base.module.scss';

const Temp = (): JSX.Element => {
  const hundleToggleEditTools = useContext(HundleContext);

  return (
    <div className={styles.grid}>
      <header className={styles.header}>
        <Head />
      </header>
      <main className={styles.main} onClick={hundleToggleEditTools}></main>
      <aside className={styles.sidebar} onClick={hundleToggleEditTools}></aside>
      <footer className={styles.footer} onClick={hundleToggleEditTools}></footer>
    </div>
  );
};

export default Temp;
