import Head from 'src/components/templates/layout/Head';
import Main from 'src/components/templates/layout/Main';
import Foot from 'src/components/templates/layout/Foot';
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
      <footer className={styles.footer}>
        <Foot />
      </footer>
    </div>
  );
};

export default Base_1;
