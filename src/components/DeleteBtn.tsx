function DeleteBtn({ setTodos, todo }) {
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  return (
    <button onClick={handleDeleteClick} className="cursor-pointer">
      ❌
    </button>
  );
}

export default DeleteBtn;
