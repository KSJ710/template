/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
// component
import List from 'src/components/general/List';
import SpMenu from 'src/components/templates/menu/SpMenu';
import HambugButton from 'src/components/templates/button/HambugButton';
// image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// css
import styles from './Head.module.scss';

const Head = (): JSX.Element => {
  const { status } = useSession();
  const [toggleDisplay, setToggleDisplay] = useState<classDisplay>('none');
  const list = [
    { value: 'Home', href: '/home', shallow: true },
    { value: 'MyPage', href: '/mypage', shallow: true },
  ];

  // SpMenuの表示非表示を切り替える
  const addActiveClass = () => {
    toggleDisplay == 'none' ? setToggleDisplay('flex') : setToggleDisplay('none');
  };

  // ログイン状態チェック
  const LoginStatus = (): JSX.Element => {
    if (status === 'authenticated') {
      return <p onClick={() => signOut()}>ログアウトする</p>;
    } else {
      return <p onClick={() => signIn()}>ログインする</p>;
    }
  };

  return (
    <>
      <SpMenu toggleDisplay={toggleDisplay} />
      <nav className={styles.base}>
        <h1 className={styles.logo}>
          <p>ロゴロゴ</p>
        </h1>
        <ul className={styles.menu}>
          <List value={list} />
        </ul>
        <FontAwesomeIcon className="hidden md:block" icon="user-circle" size="3x" />
        <LoginStatus />
        <HambugButton onClick={addActiveClass} />
      </nav>
    </>
  );
};

export default Head;
