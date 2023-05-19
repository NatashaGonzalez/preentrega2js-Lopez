import CartWidget from "../CartWidget/assets";
import React from "react"
import "./Navbar.css"
import { NavLink } from "react-router-dom";
//import { useCart } from "../../../context/CartContext";

const Navbar = () => {
    //const {cart} = useCart ()
    //console.log (cart)

    return (
        <nav>
            <div className="deco">
                <NavLink to="/"className="btn">Inicio</NavLink>
                <NavLink className="btn"> Cuidados </NavLink> 
                <NavLink to="/category/comunes" className="btn"> Comunes</NavLink> 
                <NavLink to="/category/exoticas" className="btn"> Exóticas </NavLink> 
            </div> 
            <CartWidget/>
        </nav>
    )
}

export default Navbar;