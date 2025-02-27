import { useState } from "react";
import DeleteBtn from "./DeleteBtn";

function ToDoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "buy groceries",
      isCompleted: false,
    },
    {
      id: 2,
      text: "walk the dog",
      isCompleted: true,
    },
    {
      id: 3,
      text: "do laundry",
      isCompleted: false,
    },
    ,
  ]);

  // const handleClick = () => {
  //   setTodos(
  //     todos.map((t) => {
  //       if (t.id === todo.id) {
  //         return { ...t, isCompleted: !t?.isCompleted };
  //       }

  //       return t;
  //     })
  //   );
  // };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo?.id}
          onClick={() => {
            setTodos(
              todos.map((t) => {
                if (t.id === todo.id) {
                  return { ...t, isCompleted: !t?.isCompleted };
                }

                return t;
              })
            );
          }}
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
          <DeleteBtn setTodos={setTodos} todo={todo} />{" "}
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
