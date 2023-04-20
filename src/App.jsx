import React from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/Navbar/ItemListContainer";
import Navbar from "./components/Navbar/Navbar/Navbar";
import "./App.css";
import ItemList from "./components/ItemList/ItemList";



function App() {

  //<BrowserRouter>
        //<Navbar />
//        <Routes>
  //      <Route path="/" element={<ItemListContainer />} />
    //    <Route path="/category/:categoryId" element={<ItemListContainer />} />
      //  <Routes/>
 //       <BrowserRouter/>
  //</>
  const subtitulo = <h2>Aprende más acerca de la naturaleza</h2>
  
  return (
    <div className="estilos">
      <Navbar/>
      <ItemListContainer/>
      {subtitulo}
    </div>
  );
}
  export default App;
