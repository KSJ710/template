import React, { ReactElement } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import bg from './Background.module.scss';

const BackgroundColor = () => {
  const { data, error } = useSWR('/api/colors', fetcher);
  console.log(data);

  if (error) {
    return <div>error</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  } else {
    const listColor: ReactElement = data.map((color: Color) => (
      <li key={color.id} className={`bg-${color.className} flex-grow text-center`}>
        <button value={color.className} onClick={null}>
          {color.name}
        </button>
      </li>
    ));
    return listColor;
  }
};

const fetcher: Fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data;
  });

export default BackgroundColor;
