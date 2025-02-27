import Button from "./Button";
import useTodosContext from "../hooks/useTodosContext";
import { SetStateAction, useState } from "react";

function AddTodoForm() {
  const [value, setValue] = useState("");

  const { handleAddTodo } = useTodosContext();

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleAddTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-medium text-gray-900">Add a todo</h2>
      <input
        type="text"
        required
        value={value}
        onChange={handleChange}
        className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full p-[16px] focus:outline focus:outline-[#5e1b8f] "
      />
      <Button buttonType="primary">Add to list</Button>
    </form>
  );
}

export default AddTodoForm;
