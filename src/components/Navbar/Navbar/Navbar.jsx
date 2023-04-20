import CartWidget from "../CartWidget/assets";
import React from "react"
import "./Navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="deco">
                <NavLink to={'/PruebaView'}>
                <button className="btn"> Inicio</button>
                </NavLink>
                <button className="btn"> Cuidados </button> 
                <button className="btn"> Especies </button> 
                <button className="btn"> Exóticas </button> 
            </div> 
            <CartWidget/>
        </nav>
    )
}

export default Navbar;