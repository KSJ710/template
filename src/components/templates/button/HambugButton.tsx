import React from 'react';
import styles from './HambugButton.module.scss';

function HambugButton() {
  const hundleAddActiveClass = (e) => {
    e.stopPropagation();
    e.currentTarget.classList.toggle(styles.active);
  };
  return (
    <div className={`${styles.btn_trigger} ${styles.btn}`} onClick={hundleAddActiveClass}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default HambugButton;
