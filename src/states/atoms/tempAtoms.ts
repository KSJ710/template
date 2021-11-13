import { atom } from 'recoil';

export const currentTargetState = atom<HTMLElement>({
  key: 'currentTrgetState',
  default: null,
});

export const editToolsDisplayState = atom<classDisplay>({
  key: 'editToolsDisplayState',
  default: 'none',
});
