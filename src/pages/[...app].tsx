import { useRouter } from 'next/router';
import Home from 'src/components/app/Home';
import Member from 'src/components/app/new/Member';

const App = (): JSX.Element => {
  const router = useRouter();
  const { app } = router.query;

  return (
    <>
      {app?.[0] === 'home' ? <Home /> : null}
      {app?.[0] === 'new' && app?.[1] === 'member' ? <Member /> : null}
    </>
  );
};

App.props = {
  layout: 'main',
};

export default App;
