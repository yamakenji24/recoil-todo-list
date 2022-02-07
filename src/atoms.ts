import { atom } from "recoil";

export const todoState = atom<string[]>({
  key: "todoState",
  default: [],
})
