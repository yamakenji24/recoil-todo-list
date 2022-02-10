import { atom, selector, useRecoilValue } from "recoil";

export interface TodoItem {
  id: number;
  text: string;
}

export const todoListState = atom<TodoItem[]>({
  key: "todoListState",
  default: [],
})

const todoListSelector = selector({
  key: "todoListSelector",
  get: ({ get }) => {
    const todos = get(todoListState);
    return todos;
  }
});

export const todoSelectors = {
  useGetTodoList: () => useRecoilValue(todoListSelector)
}