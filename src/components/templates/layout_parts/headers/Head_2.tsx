/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext, useState } from 'react';
import { ToggleEditTools } from 'src/pages/templates/index';
// コンポーネント
import Menu from 'src/components/templates/menu/Menu';
import SpMenu from 'src/components/templates/menu/SpMenu';
import HambugButton from 'src/components/templates/button/HambugButton';
// イメージ
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../svg/Logo_1';
// スタイルシート
import styles from './Head_2.module.scss';

const Head_2 = (): JSX.Element => {
  const hTET: (event) => void = useContext(ToggleEditTools);
  const [toggleDisplay, setToggleDisplay] = useState<classDisplay>('none');

  const addActiveClass = () => {
    toggleDisplay == 'none' ? setToggleDisplay('flex') : setToggleDisplay('none');
  };

  return (
    <>
      <SpMenu toggleDisplay={toggleDisplay} />
      <nav className={`${styles.base} _track_lay_part_Head`} onClick={hTET}>
        <div className={styles.wrap}>
          <h1 className={`${styles.logo}`}>
            <Logo height="48px" width="48px" />
            <p>ロゴロゴ2</p>
          </h1>
          <Menu />
        </div>
        <FontAwesomeIcon
          className="hidden absolute right-1.5 md:block"
          icon="user-circle"
          size="3x"
        />
        <HambugButton onClick={addActiveClass} />
      </nav>
    </>
  );
};

export default Head_2;
