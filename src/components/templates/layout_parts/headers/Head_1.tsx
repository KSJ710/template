/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext } from 'react';
import { HandleContex } from 'src/pages/templates/index';
import styles from './Head_1.module.scss';

const Head_1 = (): JSX.Element => {
  const handleContex = useContext(HandleContex);

  return (
    <nav className="flex w-full h-full">
      <h1>ロゴ</h1>
      <ul className={`${styles.common} _track_lay_part_Head`} onClick={handleContex}>
        <li>1</li>
        <li>トップ</li>
        <li>トップ</li>
        <li>トップ</li>
        <li>トップ</li>
      </ul>
    </nav>
  );
};

export default Head_1;
