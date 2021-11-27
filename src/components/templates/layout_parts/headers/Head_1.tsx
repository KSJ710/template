/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';
import React, { useContext } from 'react';
import { HandleContex } from 'src/pages/templates/index';
import HambugButton from 'src/components/templates/button/HambugButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Head_1.module.scss';
import Logo from './svg/Head_1_logo';

const Head_1 = (): JSX.Element => {
  const handleContex = useContext(HandleContex);

  const hundleStopPropagation = (e) => e.stopPropagation();

  return (
    <nav className={`${styles.base} _track_lay_part_Head`} onClick={handleContex}>
      <h1 className={`${styles.logo}`}>
        <Logo />
        <p>ロゴロゴ</p>
      </h1>
      <ul className={`${styles.menu}`}>
        <Link href="/">
          <a onClick={hundleStopPropagation}>
            <li>ページ1</li>
          </a>
        </Link>
        <Link href="#">
          <a onClick={hundleStopPropagation}>
            <li>ページ2</li>
          </a>
        </Link>
        <Link href="#">
          <a onClick={hundleStopPropagation}>
            <li>ページ3</li>
          </a>
        </Link>
        <Link href="#">
          <a onClick={hundleStopPropagation}>
            <li>ページ4</li>
          </a>
        </Link>
      </ul>
      <FontAwesomeIcon className="hidden md:block ml-auto" icon="user-circle" size="3x" />
      <HambugButton />
    </nav>
  );
};

export default Head_1;
