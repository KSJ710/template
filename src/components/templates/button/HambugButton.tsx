import React from 'react';
import styles from './HambugButton.module.scss';

const handleAddActiveClass = (e) => {
  e.stopPropagation();
  // スクロールさせない
  document.body.style.overflow = 'hidden';
  e.currentTarget.classList.toggle(styles.active);
};

function HambugButton(props) {
  return (
    <div
      className={`${styles.btn_trigger} ${styles.btn}`}
      onClick={(e) => {
        handleAddActiveClass(e);
        props.handleOnClick();
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default HambugButton;
