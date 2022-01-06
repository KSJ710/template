/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext, useState } from 'react';
import { ToggleEditTools } from 'src/pages/templates/index';
import Menu from 'src/components/templates/menu/Menu';
import SpMenu from 'src/components/templates/menu/SpMenu';
import HambugButton from 'src/components/templates/button/HambugButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Head_2.module.scss';
import Logo from './svg/Logo_2';

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
            <Logo />
            <p>ロゴロゴ2</p>
          </h1>
          <Menu />
        </div>
        <FontAwesomeIcon
          className="hidden md:block absolute right-1.5"
          icon="user-circle"
          size="3x"
        />
        <HambugButton onClick={addActiveClass} />
      </nav>
    </>
  );
};

export default Head_2;
