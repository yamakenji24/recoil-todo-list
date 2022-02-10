import { ChangeEvent, useState, Suspense } from "react";
import { useCreateDispatcher } from "src/dispatcher";
import { TodoList } from "src/components/TodoList";

export default function Home() {
  const [text, setText] = useState("");
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
      <Suspense fallback={<div>Loading...</div>}>
        <TodoList deleteTodo={dispatcher.deleteTodo} />
      </Suspense>

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
