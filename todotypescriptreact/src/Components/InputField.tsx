import React from "react";
import "./styles.css";
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
}
export default function InputField({todo,setTodo}:Props) {
  return (
    <form>
      <input type="text" placeholder="enter a task" className="input_box" />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
}
