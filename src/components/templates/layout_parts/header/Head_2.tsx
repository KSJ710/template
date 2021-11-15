import React, { useContext } from 'react';
import { HundleContext } from 'src/components/templates/layout/Base';
import styles from './Head.module.scss';

const Head = (): JSX.Element => {
  const hundleToggleEditTools = useContext(HundleContext);
  return (
    <nav className="w-full h-full">
      <ul className={styles.common} onClick={hundleToggleEditTools}>
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
