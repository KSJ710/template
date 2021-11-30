import React from 'react';
import Head from 'src/components/templates/layout/Head';
import Main from 'src/components/templates/layout/Main';
import styles from './Base_1.module.scss';

const Base_1 = (): JSX.Element => {
  return (
    <div className={styles.grid}>
      <header className={styles.header}>
        <Head />
      </header>
      <main className={styles.main}>
        <Main />
      </main>
      <aside className={styles.sidebar}>aaa</aside>
      <footer className={styles.footer}>aaa</footer>
    </div>
  );
};

export default Base_1;
