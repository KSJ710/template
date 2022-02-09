import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRecoilState, useRecoilValue } from 'recoil';

const MenuButton = (): JSX.Element => {
  const { status } = useSession();

  let loginState = 'green';
  if (status === 'loading') {
    loginState = 'yellow';
  } else if (status === 'unauthenticated') {
    loginState = 'white';
  }

  return (
    <button
      className="fixed right-8 bottom-8 w-16 h-16 rounded-full border-2 border-slate-900"
      style={{ backgroundColor: loginState }}
    ></button>
  );
};

export default MenuButton;
