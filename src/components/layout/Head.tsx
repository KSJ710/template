/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// component
import Menu from 'src/components/templates/menu/Menu';
import SpMenu from 'src/components/templates/menu/SpMenu';
import HambugButton from 'src/components/templates/button/HambugButton';
// image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// css
import styles from './Head.module.scss';

const Head = (): JSX.Element => {
  const { status } = useSession();
  const [toggleDisplay, setToggleDisplay] = useState<classDisplay>('none');
  const hundleStopPropagation = (e) => e.stopPropagation();

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

  const router = useRouter();

  const toHome = () => {
    router.push('/home', undefined, { shallow: true });
  };

  const toMyPage = () => {
    router.push('/mypage', undefined, { shallow: true });
  };

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter]);

  return (
    <>
      <SpMenu toggleDisplay={toggleDisplay} />
      <nav className={styles.base}>
        <h1 className={styles.logo}>
          <p>ロゴロゴ</p>
        </h1>
        <ul className={styles.menu}>
          <li onClick={toHome}>ページ1</li>
          <li onClick={toMyPage}>ページ2</li>
          <li>ページ3</li>
          <li>ページ4</li>
        </ul>
        <FontAwesomeIcon className="hidden md:block" icon="user-circle" size="3x" />
        <LoginStatus />
        <HambugButton onClick={addActiveClass} />
      </nav>
    </>
  );
};

export default Head;
