import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Home from 'src/components/content/Home';
import MyPage from 'src/components/content/MyPage';
import styles from './App.module.scss';

const App = (): JSX.Element => {
  const router = useRouter();
  const { main } = router.query;

  return (
    <>
      {main?.[0] === 'home' ? <Home /> : null}
      {main?.[0] === 'mypage' ? <MyPage /> : null}
    </>
  );
};

export default App;
