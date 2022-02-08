import { useRecoilCallback } from "recoil";
import { todoListState } from "./atoms";

export const useCreateDispatcher = () => {
  const addTodo = useRecoilCallback(({ set }) => (text: string) => {
    set(todoListState, (oldTodos) => [...oldTodos, text]);
  }, []);

  return {
    addTodo,
  };
};