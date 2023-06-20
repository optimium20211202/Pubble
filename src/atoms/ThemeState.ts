import { atom } from "recoil";

export const themeState = atom<string>({
  key: "ThemeAtom",
  default: "",
});
