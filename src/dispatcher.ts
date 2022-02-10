import { useRecoilCallback } from "recoil";
import { todoListState } from "./todo-state";
import { addTodoAPI, deleteTodoAPI, updateTodoAPI } from "./api";

export const useCreateDispatcher = () => {
  const addTodo = useRecoilCallback(
    ({ set }) =>
      async (text: string) => {
        const newTodo = await addTodoAPI(text);
        set(todoListState, (oldTodos) => [...oldTodos, newTodo]);
      },
    []
  );

  const deleteTodo = useRecoilCallback(
    ({ set }) =>
      async (id: number) => {
        await deleteTodoAPI(id);
        set(todoListState, (oldTodos) =>
          oldTodos.filter((todo) => todo.id !== id)
        );
      },
    []
  );

  const updateTodo = useRecoilCallback(
    ({ set }) =>
      async (id: number, text: string) => {
        const updatedTodo = await updateTodoAPI(id, text);
        set(todoListState, (oldTodos) =>
          oldTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
        );
      },
    []
  );

  return {
    addTodo,
    deleteTodo,
    updateTodo,
  };
};
