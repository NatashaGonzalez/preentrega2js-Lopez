import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext)
    
    return (
        <>
        {cartQuantity() !==0 && 
            <NavLink to='/cart'>
            <i className="bi bi-basket-fill">{cartQuantity()}</i>
            </NavLink>}
                </>
    );
}

export default CartWidget;
