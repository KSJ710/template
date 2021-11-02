import React from 'react';
import Link from 'next/link';
import styles from './App.module.scss'

const App = (): JSX.Element => {
  return (
    <div className="container mx-auto w-full h-screen bg-green-600">
      <div className="flex justify-center items-center w-auto h-full">
        <Link href="/template">
          <a className={`${styles.btn_orange} ${styles.btn_radius}`}>クリック</a>
        </Link>
      </div>
    </div>
  );

}

export default App
