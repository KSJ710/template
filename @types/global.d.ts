type Color = {
  id: number;
  name: string;
  className: string;
  kanaName: string;
};

type Fetcher = (url: string) => Promise<any>;
