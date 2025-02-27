import useTodosContext from "../hooks/useTodosContext";

function Counter() {
  const { todoListLength, completedTodosLength } = useTodosContext();

  return (
    <p>
      <b>{completedTodosLength}</b> / {todoListLength} todos completed
    </p>
  );
}

export default Counter;
