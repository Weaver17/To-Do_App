import { useState } from "react";
import DeleteBtn from "./DeleteBtn";

function ToDoList() {
  const [todos, setTodos] = useState([
    {
      text: "buy groceries",
      isCompleted: false,
    },
    {
      text: "walk the dog",
      isCompleted: true,
    },
    {
      text: "do laundry",
      isCompleted: false,
    },
    ,
  ]);

  return (
    <ul>
      {todos.map((todo, i) => (
        <li
          key={i}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%] "
        >
          {" "}
          <span
            className={`font-bold ${
              todo?.isCompleted ? "line-through text-[#ccc] font-normal" : ""
            }`}
          >
            {todo?.text}
          </span>
          <DeleteBtn />{" "}
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
