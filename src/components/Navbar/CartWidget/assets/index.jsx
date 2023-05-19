import React from "react";
//import { CartContext } from "../../../../context/CartContext";
//import { Link } from "react-router-dom";

//<Link to='/cart' style= {{display: totalQuantity > 0 ? 'block' : 'none'}}></Link> const {totalQuantity} = useContext (CartContext) {totalQuantity}
const CartWidget = () => {
    
    return (
        <i className="bi bi-basket-fill"></i>
    );
}

export default CartWidget;