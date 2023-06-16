import { atom } from "recoil";
import { TweetData } from "types";

export const contentsState = atom<TweetData[]>({
  key: "contentsAtom",
  default: [],
});
