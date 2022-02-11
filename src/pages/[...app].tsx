import { useRouter } from 'next/router';
import Home from 'src/components/content/Home';
import styles from './Main.module.scss';

const App = (): JSX.Element => {
  const router = useRouter();
  const { app } = router.query;

  return <>{app?.[0] === 'home' ? <Home /> : null}</>;
};

App.props = {
  layout: 'main',
};

export default App;
