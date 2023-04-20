import CartWidget from "../CartWidget/assets";
import React from "react"
import "./Navbar.css"
import { NavLink } from "react-router-dom";


//<NavLink to={'/PruebaView'}></NavLink>
const Navbar = () => {
    return (
        <nav>
            <div className="deco">
                
                <button className="btn"> Inicio</button>
                <button className="btn"> Cuidados </button> 
                <button className="btn"> Especies </button> 
                <button className="btn"> Exóticas </button> 
            </div> 
            <CartWidget/>
        </nav>
    )
}

export default Navbar;