import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/Navbar/ItemListContainer";
import Navbar from "./components/Navbar/Navbar/Navbar";
import "./App.css";
import Api from "./components/Navbar/Api/Api";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./Cart/Cart";

function App() {

  return (
    
    <div className="estilos">
      <CartProvider>
          <BrowserRouter>
            <Navbar/>
              <h1>Venus</h1>
              <p className="usuario"><Api/></p>
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:idproducts" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart/>}/>
              </Routes>
          </BrowserRouter>
      </CartProvider>
    </div>
  );
}
  export default App;
