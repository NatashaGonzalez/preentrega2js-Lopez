import "./App.css";
import ItemListContainer from "./components/Navbar/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Itemcount from "./components/Navbar/Itemcount/Itemcount";
import { useEffect, useState } from "react";
import Api from "./components/Navbar/Api/Api";

function App() {

  const subtitulo = <h2>Aprende más acerca de la naturaleza</h2>

  const [items, setitems] = useState ([]);

  useEffect (() => {
    new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve ([
          {
    title: "Venus",
    price: 1000,
    img: '../venus.jpg'
  },
  {
    title: "Cayena",
    price: 900,
    img: '../cayena.jpg'
  },
  {
    title: "rosa",
    price: 800,
    img: '../rosa.jpg'
  }
        ])
      }, 2000);
    })
        .then ((result) => {
          setitems (result);
        })
        .catch ((error) => {
          console.log ("no funciona");
        });
  }, []);

  return (
    <div className="estilos">
      <Navbar />
      <ItemListContainer texto="Venus" />
      {subtitulo}
      <Api/>
      <div className="contenedor">
        {items.length === 0 ? (
          <h1>Estamos cargando tu información...</h1>
        ) : (
          items.map((item, index) => {
            return <Itemcount key={index} data={item} />
          })
        )}
      </div>
    </div>
  );
}

export default App;
