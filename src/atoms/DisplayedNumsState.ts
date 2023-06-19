import { atom, selector } from "recoil";
import { contentsState } from "./ContentsState";
import { displayedIndexesState } from "./DisplayedIndexesState";

export const displayedNumsState = selector({
  key: "displayedNumsSelector",
  get: ({ get }) => {
    const displayedIndexes = get(displayedIndexesState);
    const displayedContents = get(contentsState).filter(
      (_, i) => !displayedIndexes.includes(i)
    );

    return [
      displayedContents.filter((content) => content.label === 0).length,
      displayedContents.filter((content) => content.label === 1).length,
    ];
  },
});
