/* eslint-disable tailwindcss/no-custom-classname */
// component
import List from 'src/components/general/List';
// css
import styles from './Menu.module.scss';

const Head = (props): JSX.Element => {
  const list = [
    { value: 'ログイン', href: '/api/auth/signin', shallow: false },
    { value: 'アカウント作成', href: '/login', shallow: true },
  ];

  return (
    <ul className={styles.base} style={{ display: props.display }}>
      <List value={list} />
    </ul>
  );
};

export default Head;
