import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/Navbar/ItemListContainer";
import Navbar from "./components/Navbar/Navbar/Navbar";
import "./App.css";



function App() {

  //const subtitulo = <h2>Aprende más acerca de la naturaleza</h2>
        //{subtitulo}

  
  
  return (
    
    <div className="estilos">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
  export default App;
