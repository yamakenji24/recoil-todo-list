import { useState, useRef, useCallback } from "react";
import { EditableText } from "./EditableText";

interface Props {
  id: number;
  text: string;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
}

export const Todo = ({ id, text, deleteTodo, updateTodo }: Props) => {
  const [isEditable, setisEditable] = useState(false);
  const textRef = useRef<string>(text);

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  const handleEdititable = () => {
    if (isEditable) {
      updateTodo(id, textRef.current);
    }
    setisEditable((prev) => !prev);
  };

  const handleChangeText = useCallback((newtext: string) => {
    textRef.current = newtext;
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <EditableText
        text={textRef.current}
        isEditable={isEditable}
        onChange={handleChangeText}
      />

      <button onClick={handleEdititable}>{isEditable ? "保存" : "編集"}</button>
      <button onClick={handleDeleteTodo}>削除</button>
    </div>
  );
};
