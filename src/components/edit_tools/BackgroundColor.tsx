/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext, useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { TempEditContext } from 'src/pages/template';
import styles from './Background.module.scss';

const BackgroundColor = (props): JSX.Element => {
  const tempEditVar: TempEditVar = useContext(TempEditContext);

  const hundleChangeBgColer = (e) => {
    e.stopPropagation();
    tempEditVar.currentTarget.style.backgroundColor = e.target.value;
  };
  const hundleHiddenBgColor = () => {
    props.setDisplay('none');
  };

  const { data, error } = useSWR('/api/colors', fetcher);
  if (error) {
    return <div>error</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  } else {
    const listColor = data.map((color: Color) => (
      <li
        key={color.id}
        style={{ backgroundColor: color.colorCode }}
        className="scroll_snap_child w-[100px]"
      >
        <button
          value={`${color.colorCode}`}
          className={'block w-full text-center h-[100px]'}
          onClick={hundleChangeBgColer}
        >
          {color.name}
        </button>
      </li>
    ));
    return (
      <div
        style={{ display: props.display }}
        className="absolute w-full h-full"
        onClick={hundleHiddenBgColor}
      >
        <ul
          className="flex overflow-scroll flex-wrap gap-2 m-auto gajustify-start h-[424px] w-[434px] scroll_snap_y
        scrollbar_style overflow-x-hidden"
        >
          {listColor}
        </ul>
      </div>
    );
  }
};

const fetcher: Fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data;
  });

export default BackgroundColor;
