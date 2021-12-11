import React from 'react';
import Image from 'next/image';
import mainImg from 'public/images/tamplate/content/content_1.jpg';
import styles from './Content_1.module.scss';

const Content_1 = (): JSX.Element => {
  return (
    <div className="w-full h-screen bg-red-500">
      <div className=""></div>
      <Image src={mainImg} alt="mainImg" />
    </div>
  );
};

export default Content_1;
