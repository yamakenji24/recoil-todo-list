import { atom, selector, useRecoilValue } from "recoil";

export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const fetchTodoList = async (): Promise<TodoItem[]> => {
  return await fetch("http://localhost:3000/api/todo").then((res) =>
    res.json()
  );
};

export const todoListState = atom<TodoItem[]>({
  key: "todoListState",
  default: selector({
    key: "initialTodoListState",
    get: async () => await fetchTodoList(),
  }),
});

const todoListSelector = selector({
  key: "todoListSelector",
  get: ({ get }) => get(todoListState),
});

export const todoSelectors = {
  useGetTodoList: () => useRecoilValue(todoListSelector),
};
