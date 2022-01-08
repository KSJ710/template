/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext } from 'react';
import { ToggleEditTools } from 'src/pages/templates/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Foot_2.module.scss';
import Logo from '../svg/Logo_1';

const Footer_2 = (): JSX.Element => {
  const hTET: (event) => void = useContext(ToggleEditTools);
  return (
    <nav className={`${styles.base} _track_lay_part_Foot`} onClick={hTET}>
      <div className={styles.contact}>
        <p>SUBSCRIBE TO OUR NEWSLETTER</p>
        <address>Email address</address>
        <button>メルマガ登録</button>
      </div>
      <div className={styles.sns}>
        <ul>
          <li>CONTACT</li>
          <li>FAQ</li>
          <li>
            <div className="hidden md:block">
              <FontAwesomeIcon icon={['fab', 'spotify']} />
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.site_policy}>
        <p>利用規約</p>
        <p>プライバシーポリシー</p>
        <p>特定商取引法に基づく表記</p>
      </div>
      <div className={styles.logo}>
        <Logo height="72px" width="72px" />
        <p>ロゴロゴ</p>
      </div>
      <p>© 2021 Mysite All Rights Reserved.</p>
      <div className={styles.test}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Footer_2;
