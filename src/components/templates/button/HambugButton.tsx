import React from 'react';
import styles from './HambugButton.module.scss';

// クラスを着脱することでボタンの形を変える
const addActiveClass = (e) => {
  e.stopPropagation();
  e.currentTarget.classList.toggle(styles.active);
};

function HambugButton(props) {
  return (
    <div
      className={`${styles.btn_trigger} ${styles.btn}`}
      onClick={(e) => {
        addActiveClass(e);
        props.onClick();
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default HambugButton;
