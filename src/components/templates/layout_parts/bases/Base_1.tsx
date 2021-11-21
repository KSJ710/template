import React from 'react';
import Head from 'src/components/templates/layout/Head';
import styles from './Base.module.scss';

const Base_1 = (): JSX.Element => {
  return (
    <div className={styles.grid}>
      <header className={styles.header}>
        <Head />
      </header>
      <main className={styles.main}></main>
      <aside className={styles.sidebar}></aside>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Base_1;
