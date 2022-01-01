type Color = {
  id: number;
  name: string;
  colorCode: string;
  kanaName: string;
};

type FontFamily = {
  id: number;
  name: string;
  style: string;
};

type HeadParts = {
  id: number;
  name: string;
};

type classDisplay = 'none' | 'block' | 'flex';

type Fetcher = (url: string) => Promise<any>;
