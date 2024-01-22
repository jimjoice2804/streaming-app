import { atom } from 'recoil';

export const dataShare = atom({
    key: 'dataShare', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });