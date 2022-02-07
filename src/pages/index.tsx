import { useRecoilState } from "recoil"
import { ChangeEvent, useState } from "react"
import { todoState } from "src/atoms"

export default function Home() {
  const [todos, setTodos] = useRecoilState(todoState)
  const [text, setText] = useState("")

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleAddTodo = () => {
    setTodos([...todos, text])
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
