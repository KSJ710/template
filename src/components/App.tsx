import React from 'react';
import Link from 'next/link';

const App = (): JSX.Element => {
  return (
    <div className="container mx-auto w-full h-screen bg-green-600">
      <div className="flex justify-center items-center w-auto h-full">
        <Link href="/template">
          <a className="btn btn--orange btn--radius">クリック</a>
        </Link>
      </div>
    </div>
  );

}

export default App
