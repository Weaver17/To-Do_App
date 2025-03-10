type DeleteBtnProps = {
  onDeleteTodo: (id: number) => void;
  id: number;
};

function DeleteBtn({ onDeleteTodo, id }: DeleteBtnProps) {
  const handleDeleteClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    onDeleteTodo(id);
  };

  return (
    <button onClick={handleDeleteClick} className="cursor-pointer">
      ❌
    </button>
  );
}

export default DeleteBtn;
