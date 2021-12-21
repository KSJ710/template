/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Foot_1.module.scss';

const Footer_1 = (): JSX.Element => {
  return (
    <nav className={styles.base}>
      <div className={styles.base_inner}>
        <div className={styles.menu}>
          <ul>
            <li>ページ1</li>
            <li>ページ2</li>
            <li>ページ3</li>
            <li>ページ4</li>
            <li>ページ5</li>
          </ul>
          <ul>
            <li>ページ6</li>
            <li>ページ7</li>
            <li>ページ8</li>
            <li>ページ9</li>
            <li>ページ10</li>
            <li>ページ11</li>
            <li>ページ12</li>
            <li>ページ13</li>
            <li>ページ14</li>
            <li>ページ15</li>
          </ul>
        </div>
        <div className={styles.sns}>
          <FontAwesomeIcon icon={['fab', 'instagram-square']} />
          <FontAwesomeIcon icon={['fab', 'twitter']} />
          <FontAwesomeIcon icon={['fab', 'youtube']} />
          <FontAwesomeIcon icon={['fab', 'facebook-square']} />
        </div>
        <div className={styles.site_policy}>
          <p>© 2021 Mysite All Rights Reserved.</p>
          <p>利用規約</p>
          <p>プライバシーポリシー</p>
        </div>
      </div>
    </nav>
  );
};

export default Footer_1;
