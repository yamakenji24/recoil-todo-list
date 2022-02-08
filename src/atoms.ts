import { atom } from "recoil";

export interface TodoItem {
  id: number;
  text: string;
}

export const todoListState = atom<TodoItem[]>({
  key: "todoListState",
  default: [],
})