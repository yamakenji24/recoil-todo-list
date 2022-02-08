import { useRecoilValue, useSetRecoilState } from "recoil"
import { ChangeEvent, useState } from "react"
import { todoListState } from "../atoms"
import { useCreateDispatcher } from "src/dispatcher"

export default function Home() {
  const todos = useRecoilValue(todoListState)
  const [text, setText] = useState("")
  const dispatcher = useCreateDispatcher()

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleAddTodo = () => {
    dispatcher.addTodo(text)
  }

  return (
    <div>
      <h2>TodoList</h2>
      <div>
        {todos.map((todo, i) => (
          <div key={i}>{todo}</div>
        ))}
      </div>

      <h2>新しいtodo</h2>
      <textarea 
        placeholder="Add Todo"
        value={text}
        onChange={handleChangeText}
      />
      <button onClick={handleAddTodo}>
        追加
      </button>
    </div>
  )
}
