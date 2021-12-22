import React from 'react';
import Link from 'next/link';
import styles from './SpMenu.module.scss';

const SpMenu = (props) => {
  const handleStopPropagation = (e) => e.stopPropagation();

  return (
    <nav>
      <ul style={{ display: props.toggleDisplay }} className={styles.menu}>
        <Link href="/">
          <a onClick={handleStopPropagation}>
            <li>ページ1</li>
          </a>
        </Link>
        <Link href="#">
          <a onClick={handleStopPropagation}>
            <li>ページ2</li>
          </a>
        </Link>
        <Link href="#">
          <a onClick={handleStopPropagation}>
            <li>ページ3</li>
          </a>
        </Link>
        <Link href="#">
          <a onClick={handleStopPropagation}>
            <li>ページ4</li>
          </a>
        </Link>
        <Link href="#">
          <a onClick={handleStopPropagation}>
            <li>ログイン</li>
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default SpMenu;
