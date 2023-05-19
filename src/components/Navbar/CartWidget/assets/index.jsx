import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const {totalQuantity} = useContext (CartContext)

    return (
        <Link to='/cart' style= {{display: totalQuantity > 0 ? 'block' : 'none'}}>
        <i className="bi bi-basket-fill"></i>
        {totalQuantity}
        </Link>
        
        
        
    );
}

export default CartWidget;