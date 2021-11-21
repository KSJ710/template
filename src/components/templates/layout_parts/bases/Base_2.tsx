import React from 'react';
import Head from 'src/components/templates/layout/Head';
import styles from './Base.module.scss';

const Base_2 = (props): JSX.Element => {
  return (
    <div className={styles.grid}>
      <header className={styles.header}>
        <Head />
      </header>
      <main className={styles.main} onClick={props.handleToggleEditTools}></main>
      <aside className={styles.sidebar} onClick={props.handleToggleEditTools}></aside>
      <footer className={styles.footer} onClick={props.handleToggleEditTools}></footer>
    </div>
  );
};

export default Base_2;
