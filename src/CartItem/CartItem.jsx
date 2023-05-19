import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CarItem = ({articulo}) => {

    const {removeItem} = useContext (CartContext)
    return (
        <div>
            <img src={articulo.img} alt={articulo.title} />
            <span>{articulo.title}</span>
            <span>{articulo.quanitity}</span>
            <span>${articulo.price}</span>
            <button onClick={() => removeItem(articulo.id)}>X</button>
        </div>
    )
}

export default CarItem;