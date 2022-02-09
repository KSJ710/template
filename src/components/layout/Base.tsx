import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import Head from 'src/components/layout/Head';
import Foot from 'src/components/layout/Foot';
import Menu from 'src/components/layout/Menu';
import MenuButton from 'src/components/button/MenuButton';
import styles from './Base.module.scss';

// ログイン状態チェック
const LoginStatus = (): JSX.Element => {
  const { status } = useSession();
  if (status === 'authenticated') {
    return <p onClick={() => signOut()}>ログアウト</p>;
  } else {
    return <p onClick={() => signIn()}>ログイン</p>;
  }
};

const Base = (props): JSX.Element => {
  const [toggleDisplay, setToggleDisplay] = useState<classDisplay>('none');
  // Menuの表示非表示を切り替える
  const handleTglDisp = () => {
    toggleDisplay == 'none' ? setToggleDisplay('flex') : setToggleDisplay('none');
  };

  return (
    <div className={styles.grid}>
      <header className={styles.header}>
        <Head />
      </header>
      {props.children}
      <footer className={styles.footer}>
        <Foot />
      </footer>
      <div className={styles.modal} style={{ display: toggleDisplay }}>
        <Menu />
      </div>
      <div onClick={handleTglDisp}>
        <MenuButton />
      </div>
    </div>
  );
};

export default Base;
