import { atom } from 'recoil';

export const currentTargetState = atom<HTMLElement>({
  key: 'currentTrgetState',
  default: null,
});

export const editToolsDisplayState = atom<classDisplay>({
  key: 'editToolsDisplayState',
  default: 'none',
});

export const tempLayoutState = atom<number>({
  key: 'tempLayoutState',
  default: 1,
});

export const tempHeadState = atom<number>({
  key: 'tempHeadState',
  default: 1,
});
