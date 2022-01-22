/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
// component
import Menu from 'src/components/templates/menu/Menu';
import SpMenu from 'src/components/templates/menu/SpMenu';
import HambugButton from 'src/components/templates/button/HambugButton';
// image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// css
import styles from './Head.module.scss';

const Head = (): JSX.Element => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      return <p>エラー</p>;
    },
  });
  const [toggleDisplay, setToggleDisplay] = useState<classDisplay>('none');

  // SpMenuの表示非表示を切り替える
  const addActiveClass = () => {
    toggleDisplay == 'none' ? setToggleDisplay('flex') : setToggleDisplay('none');
  };

  // ログイン状態チェック
  const LoginStatus = (): JSX.Element => {
    if (status === 'authenticated') {
      return <p>{session.user.email}</p>;
    } else {
      return <FontAwesomeIcon className="hidden md:block" icon="user-circle" size="3x" />;
    }
  };

  return (
    <>
      <SpMenu toggleDisplay={toggleDisplay} />
      <nav className={`${styles.base} _track_lay_part_Head`}>
        <h1 className={`${styles.logo}`}>
          <p>ロゴロゴ</p>
        </h1>
        <button onClick={() => signOut()}>Sign out</button>
        <button onClick={() => signIn()}>Sign in</button>
        <Menu />
        <LoginStatus />
        <HambugButton onClick={addActiveClass} />
      </nav>
    </>
  );
};

export default Head;
