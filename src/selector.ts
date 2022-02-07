import { selector } from "recoil";
import { todoState } from "./atoms";

export const todoSelector = selector<string[]>({
  key: "todoSelector",
  get: ({ get }) => {
    const newtodoState = get(todoState);
    return newtodoState;
  },
  set: ({ set }, newtodoState) => {
    set(todoState, newtodoState);
  }
});