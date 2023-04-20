import Itemcount from "./components/Navbar/Itemcount/Itemcount";


const ItemList = ({items}) => {

    return (

        <div className="contenedor">
        {items.length === 0 ? (
        <h1>Estamos cargando tu información...</h1>
        ) : (
        items.map((item, index) => {
            return <Itemcount key={index} data={item}/>
        })
        )}
    </div>
        )
    }

    export default ItemList;