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
        className="w-[calc(20%-8px)] scroll_snap_child"
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
        className="justify-center items-center bg-transparent bg_modal"
        onClick={hundleHiddenBgColor}
      >
        <ul className={styles.tool_bgcolor}>{listColor}</ul>
      </div>
    );
  }
};

const fetcher: Fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data;
  });

export default BackgroundColor;
