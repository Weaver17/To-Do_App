import Header from "./Header";
import Sidebar from "./Sidebar";
import ToDoList from "./ToDoList";

function MainContent({ todos, setTodos }) {
  return (
    <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-lg grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden ">
      <Header todos={todos} />
      <ToDoList todos={todos} setTodos={setTodos} />
      <Sidebar todos={todos} setTodos={setTodos} />
    </main>
  );
}

export default MainContent;
