type Color = {
  id: number;
  name: string;
  colorCode: string;
  kanaName: string;
};

type classDisplay = 'none' | 'block' | 'flex';

type Fetcher = (url: string) => Promise<any>;
