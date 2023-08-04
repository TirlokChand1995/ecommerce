import Navbar from "./pages/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import './pages/style.css';
import {  BrowserRouter as Browser, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import data from "./database.json"

function App() {

  return (
    <>
    <Browser>
      <Navbar />
      <Routes>
              <Route exact path="/" element={<Home  data={data} />} />
              <Route exact path="/Cart" element={<Cart />} />
            </Routes>
      </Browser>
    
    </>
  );
}

export default App;
