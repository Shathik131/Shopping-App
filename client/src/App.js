import "./App.css";
import Navbar from "./components/common/navbar";
import Home from "./components/pages/home";

function App() {
  return (
    <>
      <Navbar />
      <div className='App'>
        <Home />           
      </div>
    </>
  );
}

export default App;
