type Color = {
  id: number;
  name: string;
  colorCode: string;
  kanaName: string;
};

type EditVar = {
  currentTarget: HTMLElement;
  setCurrentTarget: React.Dispatch<HTMLElement>;
  display: Display;
  setDisplay: React.Dispatch<Display>;
};

type classDisplay = 'display-none' | 'dsiplay-block';

type Fetcher = (url: string) => Promise<any>;
