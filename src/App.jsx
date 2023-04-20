import "./App.css";
import ItemListContainer from "./components/Navbar/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Itemcount from "./components/Navbar/Itemcount/Itemcount";
import { useEffect, useState } from "react";



function App() {

  const subtitulo = <h2>Aprende más acerca de la naturaleza</h2>

  const [items, setitems] = useState ([]);

  useEffect (() => {
    new promised ((resolve, reject) => {
      setTimeout(() => {
        resolve ([
          {
    title: "Venus",
    price: 1000
  },
  {
    title: "Cayena",
    price: 900
  },
  {
    title: "rosa",
    price: 800
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

  //const items = []

  return (
    <div className="estilos">
      <Navbar />
      <ItemListContainer texto="Venus" />
      {subtitulo}
      <div className="contenedor">
        {
          items.map((item, index) => {
            return <Itemcount key={index} data={item} />
          })
        }
      </div>


    </div>
  );
}

export default App;
