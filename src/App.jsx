import "./App.css";
import ItemListContainer from "./components/Navbar/ItemListContainer";
import Navbar from "./components/Navbar/Navbar/Navbar";
//el de Itemcount
//el de usestate
import Api from "./components/Navbar/Api/Api";
import ItemList from "./components/ItemList/ItemList";

function App() {

  const subtitulo = <h2>Aprende más acerca de la naturaleza</h2>

  return (

    <div className="estilos">
      <Navbar />
      <ItemListContainer texto="Venus" />
      {subtitulo}
      <Api/>
      <ItemList/>
    </div>
  );
}

export default App;
