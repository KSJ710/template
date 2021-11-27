import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './Menu.module.scss';

const Menu = (props) => {
  const handleStopPropagation = (e) => e.stopPropagation();
  useEffect(() => {
    document.getElementsByClassName(styles.menu)[0].classList.toggle(props.addClassName);
  });

  return (
    <ul className={styles.menu}>
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
    </ul>
  );
};

export default Menu;
