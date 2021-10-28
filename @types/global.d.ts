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

type classDisplay = 'hidden' | 'block';

type Fetcher = (url: string) => Promise<any>;
