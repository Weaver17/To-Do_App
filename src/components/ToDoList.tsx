import DeleteBtn from "./DeleteBtn";

function ToDoList({ todos, setTodos }) {
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
    <>
      {todos.length === 0 ? (
        <h4 className="mx-auto mt-[12px] font-bold">Start by adding a Todo</h4>
      ) : (
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
                  todo?.isCompleted
                    ? "line-through text-[#ccc] font-normal"
                    : ""
                }`}
              >
                {todo?.text}
              </span>
              <DeleteBtn setTodos={setTodos} todo={todo} />{" "}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ToDoList;
