import React, { useContext } from 'react';
import { HundleContext } from 'src/pages/templates/index';
import styles from './Head.module.scss';

const Head = (): JSX.Element => {
  const hundleToggleEditTools = useContext(HundleContext);
  return (
    <nav className="w-full h-full">
      <ul className={styles.common} onClick={hundleToggleEditTools}>
        <li>1</li>
        <li>トップ</li>
        <li>トップ</li>
        <li>トップ</li>
        <li>トップ</li>
      </ul>
    </nav>
  );
};

export default Head;
