import { useRouter } from 'next/router';
import Home from 'src/components/app/Home';
import MemberNew from 'src/components/app/member/New';

export default function App(): JSX.Element {
  const router = useRouter();
  const { app } = router.query;

  return (
    <>
      {app?.[0] === 'home' ? <Home /> : null}
      {app?.[0] === 'member' && app?.[1] === 'new' ? <MemberNew /> : null}
    </>
  );
}

App.props = {
  layout: 'main',
};
