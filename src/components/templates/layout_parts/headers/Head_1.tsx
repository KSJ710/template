import React from 'react';
import styles from './Head.module.scss';

const Head_1 = (props): JSX.Element => {
  return (
    <nav className="w-full h-full">
      <ul className={styles.common} onClick={props.handleToggleEditTools}>
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
