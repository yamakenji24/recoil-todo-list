import { useRecoilCallback } from "recoil";
import { todoListState } from "./todo-state";

let id = 0;

export const useCreateDispatcher = () => {
  const addTodo = useRecoilCallback(({ set }) => (text: string) => {
    const newTodo = {id, text, completed: false};
    set(todoListState, (oldTodos) => [...oldTodos, newTodo]);
    id += 1;
  }, []);

  const deleteTodo = useRecoilCallback(({ set }) => (id: number) => {
    set(todoListState, (oldTodos) => oldTodos.filter((todo) => todo.id !== id));
  }, []);

  return {
    addTodo,
    deleteTodo,
  };
};