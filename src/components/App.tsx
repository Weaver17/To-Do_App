import { useState } from "react";
import BackgroundHeading from "../components/BackgroundHeading";
import Footer from "./Footer";
import MainContent from "./MainContent";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className=" flex flex-col justify-center items-center bg-[#886e9a] min-h-screen ">
      <BackgroundHeading />
      <MainContent todos={todos} setTodos={setTodos} />
      <Footer />
    </div>
  );
}

export default App;
