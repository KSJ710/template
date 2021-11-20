import { atom } from 'recoil';

export const currentTargetState = atom<HTMLElement>({
  key: 'currentTrgetState',
  default: null,
});

export const editToolsDisplayState = atom<classDisplay>({
  key: 'editToolsDisplayState',
  default: 'none',
});

export const tplLayoutState = atom<number>({
  key: 'tplLayoutState',
  default: 1,
});

export const tplHeadNumberState = atom<number>({
  key: 'tplHeadState',
  default: 1,
});
