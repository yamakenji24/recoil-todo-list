import { useRecoilState } from "recoil"
import { ChangeEvent, useState } from "react"
import { todoSelector } from "src/selector"

export default function Home() {
  const [newTodo, setNewTodo] = useRecoilState(todoSelector)
  const [text, setText] = useState("")

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleAddTodo = () => {
    setNewTodo([...newTodo, text])
  }

  return (
    <div>
      <h2>TodoList</h2>
      <div>
        {newTodo.map((todo, i) => (
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
