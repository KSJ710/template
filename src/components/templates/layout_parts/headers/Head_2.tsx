import React from 'react';
import styles from './Head.module.scss';

const Head = (props): JSX.Element => {
  return (
    <nav className="w-full h-full">
      <ul className={styles.common} onClick={props.hundleToggleEditTools}>
        <li>2</li>
        <li>トップ</li>
        <li>トップ</li>
        <li>トップ</li>
        <li>トップ</li>
      </ul>
    </nav>
  );
};

export default Head;
