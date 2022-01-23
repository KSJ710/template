import { useEffect } from 'react';
import { useRouter } from 'next/router';
import App from 'src/components/App';
import Base from 'src/components/layout/Base';

const Index = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    // router.push('/?counter=10', undefined, { shallow: true });
  });

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter]);

  return (
    <Base>
      <App />
    </Base>
  );
};

export default Index;
