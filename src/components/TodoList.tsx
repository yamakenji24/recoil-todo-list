import { todoSelectors } from "src/todo-state";
import { Todo } from "src/components/Todo";

interface Props {
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
}

export const TodoList = ({ deleteTodo, updateTodo }: Props) => {
  const todos = todoSelectors.useGetTodoList();

  return (
    <div>
      {todos.map((todo, i) => (
        <Todo
          key={i}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          {...todo}
        />
      ))}
    </div>
  );
};
