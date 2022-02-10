import { todoSelectors } from "src/todo-state";

interface Props {
  deleteTodo: (id: number) => void;
}

export const TodoList = ({ deleteTodo }: Props) => {
  const todos = todoSelectors.useGetTodoList();

  return (
    <div>
      {todos.map((todo, i) => (
        <Todo key={i} deleteTodo={deleteTodo} {...todo} />
      ))}
    </div>
  )
};

const Todo = ({
  id,
  text,
  deleteTodo,
}: {
  id: number;
  text: string;
  deleteTodo: (id: number) => void;
}) => {
  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleDeleteTodo}>削除</button>
    </div>
  );
};
