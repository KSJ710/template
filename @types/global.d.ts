type Color = {
  id: number;
  name: string;
  colorCode: string;
  kanaName: string;
};

type HeadParts = {
  id: number;
  name: string;
};

type classDisplay = 'none' | 'block' | 'flex';

type Fetcher = (url: string) => Promise<any>;
