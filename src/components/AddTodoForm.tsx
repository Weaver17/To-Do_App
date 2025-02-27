import { useState } from "react";
import Button from "./Button";

function AddTodoForm({ todos, setTodos }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: value,
        isCompleted: false,
      },
    ]);
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
