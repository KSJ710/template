/* eslint-disable tailwindcss/no-custom-classname */
// component
import List from 'src/components/general/List';
// css
import styles from './Menu.module.scss';

const Head = (props): JSX.Element => {
  const list = [
    { value: 'Home', href: '/home', shallow: true },
    { value: 'Auth', href: '/api/auth/signin', shallow: false },
    { value: 'MyPage', href: '/mypage', shallow: true },
  ];

  return (
    <ul className={styles.menu} style={{ display: props.display }}>
      <List value={list} />
    </ul>
  );
};

export default Head;
