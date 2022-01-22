import Head from 'src/components/layout/Head';
import Foot from 'src/components/layout/Foot';
import styles from './Base.module.scss';

const Base = (props): JSX.Element => {
  return (
    <div className={styles.grid}>
      <header className={styles.header}>
        <Head />
      </header>
      {props.children}
      <footer className={styles.footer}>
        <Foot />
      </footer>
    </div>
  );
};

export default Base;
