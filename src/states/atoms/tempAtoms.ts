import { atom } from 'recoil';

export const currentTargetState = atom<HTMLElement>({
  key: 'currentTrgetState',
  default: null as HTMLElement,
});

export const editToolsDisplayState = atom<classDisplay>({
  key: 'editToolsDisplayState',
  default: 'none',
});
