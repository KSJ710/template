import React, { useContext } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { TempEditContext } from 'src/pages/template';
import styles from './Background.module.scss';

const BackgroundColor = (props): JSX.Element => {
  const tempEditVar: TempEditVar = useContext(TempEditContext);
  const hundleBgColer = (e) => (tempEditVar.currentTarget.style.backgroundColor = e.target.value);

  const { data, error } = useSWR('/api/colors', fetcher);
  console.log(data);
  if (error) {
    return <div>error</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  } else {
    const listColor = data.map((color: Color) => (
      <li key={color.id} className={`bg-${color.colorCode} flex-grow text-center list-none`}>
        <button className={props.display} value={`#${color.colorCode}`} onClick={hundleBgColer}>
          {color.name}
        </button>
      </li>
    ));
    return (
      <ul className={`${styles.selectBackgroundColor} flex flex-wrap flex-1 w-full wrap`}>
        {listColor}
      </ul>
    );
  }
};

const fetcher: Fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data;
  });

export default BackgroundColor;
