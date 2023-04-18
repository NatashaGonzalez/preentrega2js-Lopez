import "./App.css";
import  ItemListContainer  from "./components/Navbar/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Navbar/cards/Cards";


function App() {
    const subtitulo = <h2>Aprende más acerca de la naturaleza</h2>

  return (
    <div className="estilos">
      <Navbar />
      <ItemListContainer texto="Venus"/>
      <Cards />
      {subtitulo}
    </div>
  );
}

export default App;
