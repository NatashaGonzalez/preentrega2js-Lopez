import CartWidget from "../CartWidget/assets";
import React from "react"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <div className="deco">
                <button className="btn"> Cuidados </button> 
                <button className="btn"> Especies </button> 
                <button className="btn"> Exóticas </button> 
            </div> 
            <CartWidget/>
        </nav>
    )
}

export default Navbar