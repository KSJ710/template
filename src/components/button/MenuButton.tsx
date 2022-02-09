import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const MenuButton = (): JSX.Element => {
  return <button className="fixed right-8 bottom-8 w-16 h-16 bg-green-300 rounded-full"></button>;
};

export default MenuButton;
