import styles from './Exp.module.scss';
import { useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Exp = (): JSX.Element => {
  const router = useRouter();
  const { exp } = router.query;
  console.log(exp);
  return (
    <div className={styles.grid}>
      <p>{exp}1</p>
    </div>
  );
};

export default Exp;
