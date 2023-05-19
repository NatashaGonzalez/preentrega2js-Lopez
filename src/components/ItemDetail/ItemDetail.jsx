import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../Navbar/Itemcount/Itemcount";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { useContext } from "react";

const ItemDetail = ({ title, img, category, description, price, id }) => {
    const [quantityAdded, setQuantityAdded] = useState (0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, title, price, img
    }

    addItem(item, quantity)
    }
    
    return (
        <article>
            <header>
                <h2>{title}</h2>
            </header>
            <picture>
                <img src={img} alt={title} />
            </picture>
            <section>
                <p>Categoria: {category}</p>
                <p>Descripción: {description}</p>
                <p>Precio: {price}</p>
            </section>
            
            <Button className="boton" as={NavLink} to={`/`}>Seguir comprando</Button>
            {
            quantityAdded > 0 ? (
                <Link to='/cart'>Terminar compra</Link>
            ) : (
                <ItemCount initial={1} onAdd= {handleOnAdd}/>
            )
        }

        <button>Chekout</button>
        </article>
        
    );
};

export default ItemDetail