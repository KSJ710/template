import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

export const currentTargetState = atom({
  key: 'currentTrgetState',
  default: null,
});

export const editToolsDisplayState = atom({
  key: 'editToolsDisplayState',
  default: 'none',
});
