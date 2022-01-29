import Link from 'next/link';
import styles from './Menu.module.scss';

const Menu = () => {
  const hundleStopPropagation = (e) => e.stopPropagation();

  return (
    <ul className={styles.menu}>
      <Link href="/">
        <a onClick={hundleStopPropagation}>
          <li>ページ1</li>
        </a>
      </Link>
      <Link href="#">
        <a onClick={hundleStopPropagation}>
          <li>ページ2</li>
        </a>
      </Link>
      <Link href="#">
        <a onClick={hundleStopPropagation}>
          <li>ページ3</li>
        </a>
      </Link>
      <Link href="#">
        <a onClick={hundleStopPropagation}>
          <li>ページ4</li>
        </a>
      </Link>
    </ul>
  );
};

export default Menu;
