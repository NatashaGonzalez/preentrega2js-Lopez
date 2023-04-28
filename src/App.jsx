import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/Navbar/ItemListContainer";
import Navbar from "./components/Navbar/Navbar/Navbar";
import "./App.css";
import Itemcount from "./components/Navbar/Itemcount/Itemcount";
import Api from "./components/Navbar/Api/Api";

function App() {

  return (
    
    <div className="estilos">
      <BrowserRouter>
      <Navbar/>
      <h1>Venus</h1>
      <p className="usuario"><Api/></p>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
      </Routes>
      <Itemcount/>
      </BrowserRouter>
    </div>
  );
}
  export default App;
