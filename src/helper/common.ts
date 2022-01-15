import axios from 'axios';

// useSWRが受け取る関数でapiルートURLが渡される
export const fetcher: Fetcher = (url: string) =>
  axios.get(url).then((res) => {
    return res.data;
  });
