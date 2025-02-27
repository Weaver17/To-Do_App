import BackgroundHeading from "../components/BackgroundHeading";
import Footer from "./Footer";
import MainContent from "./MainContent";

function App() {
  return (
    <div className=" flex flex-col justify-center items-center bg-[#886e9a] min-h-screen ">
      <BackgroundHeading />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
