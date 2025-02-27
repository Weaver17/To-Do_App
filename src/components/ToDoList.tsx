import DeleteBtn from "./DeleteBtn";
import useTodosContext from "../hooks/useTodosContext";

function ToDoList() {
  const { todos, handleDeleteTodo, handleToggleTodo } = useTodosContext();

  return (
    <>
      {todos.length === 0 ? (
        <h4 className="mx-auto mt-[12px] font-bold">Start by adding a Todo</h4>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li
              key={todo?.id}
              onClick={() => {
                handleToggleTodo(todo.id);
              }}
              className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%] "
            >
              {" "}
              <span
                className={`font-bold ${
                  todo?.isCompleted
                    ? "line-through text-[#ccc] font-normal"
                    : ""
                }`}
              >
                {todo?.text}
              </span>
              <DeleteBtn onDeleteTodo={handleDeleteTodo} id={todo.id} />{" "}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ToDoList;
