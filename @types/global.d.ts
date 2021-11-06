type Color = {
  id: number;
  name: string;
  colorCode: string;
  kanaName: string;
};

type TempEditVar = {
  currentTarget: HTMLElement;
  setCurrentTarget: React.Dispatch<HTMLElement>;
  display: Display;
  setDisplay: React.Dispatch<Display>;
};

type classDisplay = 'none' | 'block' | 'flex';

type Fetcher = (url: string) => Promise<any>;
