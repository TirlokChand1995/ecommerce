import Navbar from "./pages/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import './pages/style.css';
import {  BrowserRouter as Browser, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { ShopContextProvider } from "./pages/ShopContextProvider";

function App() {

  return (
    <>
    <ShopContextProvider>
    <Browser>
      <Navbar />
      <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Cart" element={<Cart />} />
            </Routes>
      </Browser>
      </ShopContextProvider>
    </>
  );
}

export default App;
