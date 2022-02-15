/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext } from 'react';
// イメージ
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Foot.module.scss';

const Foot = (): JSX.Element => {
  return <nav className={styles.base}></nav>;
};

export default Foot;
