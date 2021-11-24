/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext } from 'react';
import { HandleContex } from 'src/pages/templates/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './Head_1.module.scss';
import Logo from './svg/Head_1_logo';

const Head_1 = (): JSX.Element => {
  const handleContex = useContext(HandleContex);

  return (
    <nav className={`${styles.base} _track_lay_part_Head`} onClick={handleContex}>
      <h1 className={`${styles.logo}`}>
        <Logo />
        <p>ロゴロゴ</p>
      </h1>
      <ul className={`${styles.menu}`}>
        <li>1</li>
        <li>トップ</li>
        <li>トップ</li>
        <li>トップ</li>
        <li>トップ</li>
      </ul>
      <FontAwesomeIcon icon={faUserCircle} />
    </nav>
  );
};

export default Head_1;
