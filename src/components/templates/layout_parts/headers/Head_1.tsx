/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext, useState } from 'react';
import { HandleContex } from 'src/pages/templates/index';
import Menu from 'src/components/templates/menu/Menu';
import SpMenu from 'src/components/templates/menu/SpMenu';
import HambugButton from 'src/components/templates/button/HambugButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Head_1.module.scss';
import Logo from './svg/Head_1_logo';

const Head_1 = (): JSX.Element => {
  const handleContex = useContext(HandleContex);
  const [toggleDisplay, setToggleDisplay] = useState<classDisplay>('none');

  const handleAddActiveClass = () => {
    toggleDisplay == 'none' ? setToggleDisplay('flex') : setToggleDisplay('none');
  };

  return (
    <>
      <SpMenu toggleDisplay={toggleDisplay} />
      <nav className={`${styles.base} _track_lay_part_Head`} onClick={handleContex}>
        <h1 className={`${styles.logo}`}>
          <Logo />
          <p>ロゴロゴ</p>
        </h1>
        <Menu />
        <FontAwesomeIcon className="hidden md:block" icon="user-circle" size="3x" />
        <HambugButton handleOnClick={handleAddActiveClass} />
      </nav>
    </>
  );
};

export default Head_1;
