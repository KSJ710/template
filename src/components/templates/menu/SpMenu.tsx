import Link from 'next/link';
import styles from './SpMenu.module.scss';

const SpMenu = (props) => {
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <nav>
      <ul style={{ display: props.toggleDisplay }} className={styles.menu}>
        <Link href="/">
          <a onClick={stopPropagation}>
            <li>ページ1</li>
          </a>
        </Link>
        <Link href="#">
          <a onClick={stopPropagation}>
            <li>ページ2</li>
          </a>
        </Link>
        <Link href="#">
          <a onClick={stopPropagation}>
            <li>ページ3</li>
          </a>
        </Link>
        <Link href="#">
          <a onClick={stopPropagation}>
            <li>ページ4</li>
          </a>
        </Link>
        <Link href="#">
          <a onClick={stopPropagation}>
            <li>ログイン</li>
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default SpMenu;
