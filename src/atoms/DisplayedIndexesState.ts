import { atom } from "recoil";

export const displayedIndexesState = atom<number[]>({
  key: "displayedIndexesAtom",
  default: [],
});
