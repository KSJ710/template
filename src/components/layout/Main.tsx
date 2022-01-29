import { useRouter } from 'next/router';
import Home from 'src/components/content/Home';
import MyPage from 'src/components/content/MyPage';
import styles from './Main.module.scss';

const Main = (): JSX.Element => {
  const router = useRouter();
  const { app } = router.query;

  return (
    <>
      {app?.[0] === 'home' ? <Home /> : null}
      {app?.[0] === 'mypage' ? <MyPage /> : null}
    </>
  );
};

export default Main;
