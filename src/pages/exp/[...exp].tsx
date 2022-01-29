import styles from './Exp.module.scss';
import { useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { route } from 'next/dist/server/router';

const Exp = ({ data }): JSX.Element => {
  const router = useRouter();
  const { exp } = router.query;
  console.log(router.isFallback);
  if (router.isFallback) {
    return <div>loading</div>;
  }

  return (
    <div className={styles.grid}>
      <div>{data}</div>
      <ul>
        <Link href="/templates">
          <a>
            <li>aaa</li>
          </a>
        </Link>
        <Link href="/exp/aaaa">
          <a>
            <li>bbb</li>
          </a>
        </Link>
        <li>ccc</li>
      </ul>
    </div>
  );
};

export default Exp;
