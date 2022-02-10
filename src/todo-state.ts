import { atom, selector, useRecoilValue } from "recoil";
import { fetchTodoListAPI } from "./api";

export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export const todoListState = atom<TodoItem[]>({
  key: "todoListState",
  default: selector({
    key: "initialTodoListState",
    get: async () => await fetchTodoListAPI(),
  }),
});

const todoListSelector = selector({
  key: "todoListSelector",
  get: ({ get }) => get(todoListState),
});

export const todoSelectors = {
  useGetTodoList: () => useRecoilValue(todoListSelector),
};
