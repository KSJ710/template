import React from 'react';
import Head from 'src/components/templates/layout/Head';
import styles from './Base.module.scss';

const Temp = (props): JSX.Element => {
  return (
    <div className={styles.grid}>
      <header className={styles.header}>
        <Head />
      </header>
      <main className={styles.main} onClick={props.hundleToggleEditTools}></main>
      <aside className={styles.sidebar} onClick={props.hundleToggleEditTools}></aside>
      <footer className={styles.footer} onClick={props.hundleToggleEditTools}></footer>
    </div>
  );
};

export default Temp;
