import "./App.css";
import ItemListContainer from "./components/Navbar/ItemListContainer";
import Navbar from "./components/Navbar/Navbar/Navbar";

function App() {

  const subtitulo = <h2>Aprende más acerca de la naturaleza</h2>

  return (

    <div className="estilos">
      
      <ItemListContainer texto="Venus" />
      {subtitulo}
    </div>
  );
}
//<Navbar />
export default App;
