import Button from "./Button";

function AddTodoForm() {
  return (
    <form action="">
      <h2 className="font-medium text-gray-900">Add a todo</h2>
      <input
        type="text"
        className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full p-[16px] focus:outline focus:outline-[#5e1b8f] "
      />
      <Button buttonType="primary">Add to list</Button>
    </form>
  );
}

export default AddTodoForm;
