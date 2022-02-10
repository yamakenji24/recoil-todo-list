import { ChangeEvent, useState } from "react";
import { todoSelectors } from "src/todo-state";
import { useCreateDispatcher } from "src/dispatcher";

export default function Home() {
  const [text, setText] = useState("");
  const todos = todoSelectors.useGetTodoList();
  const dispatcher = useCreateDispatcher();

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    dispatcher.addTodo(text);
  };

  return (
    <div>
      <h2>TodoList</h2>
      <div>
        {todos.map((todo, i) => (
          <Todo key={i} deleteTodo={dispatcher.deleteTodo} {...todo} />
        ))}
      </div>

      <h2>新しいtodo</h2>
      <textarea
        placeholder="Add Todo"
        value={text}
        onChange={handleChangeText}
      />
      <button onClick={handleAddTodo}>追加</button>
    </div>
  );
}

const Todo = ({ id, text, deleteTodo }: {
  id: number;
  text: string;
  deleteTodo: (id: number) => void;
}) => {
  const handleDeleteTodo = () => {
    deleteTodo(id)
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleDeleteTodo}>削除</button>
    </div>
  );
};
