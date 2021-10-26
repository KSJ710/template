import React from 'react';
import useSWR from 'swr';
import bg from './Background.module.scss';

const fetcher = (url) =>
  fetch(url).then((res) => {
    console.log(res);
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      // エラーオブジェクトに追加情報を付与します。
      throw error;
    }
    res.json();
  });
const BackgroundColor = () => {
  const { data, error } = useSWR('/api/colors', fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      // 404では再試行しない。
      if (error.status === 404) return;

      // 特定のキーでは再試行しない。
      if (key === '/api/user') return;

      // 再試行は10回までしかできません。
      if (retryCount >= 10) return;

      // 5秒後に再試行します。
      setTimeout(() => revalidate({ retryCount }), 5000);
    },
  });
  if (!data) {
    // console.log(data);
    console.log(error);
    return <div>loading...</div>;
  } else {
    console.log(data);
    return <div>a</div>;
  }
  // const listColor = data.map((color) => (
  //   <li key={color.id} className={`bg-${color.className} flex-grow text-center`}>
  //     <button value={color.className} onClick={null}>
  //       {color.name}
  //     </button>
  //   </li>
  // ));
  // return listColor;
};

export default BackgroundColor;
