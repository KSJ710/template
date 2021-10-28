type Color = {
  id: number;
  name: string;
  colorCode: string;
  kanaName: string;
};

type EditVar = {
  currentTarget: HTMLElement;
  setCurrentTarget: React.Dispatch<HTMLElement>;
  display: string;
  setDisplay: React.Dispatch<string>;
};

type Fetcher = (url: string) => Promise<any>;
