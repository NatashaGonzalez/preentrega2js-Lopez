import CartWidget from "../CartWidget/assets";
import "./Navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
            <div className="deco">
                <NavLink to="/"className="btn">Inicio</NavLink>
                <NavLink to="/category/comunes" className="btn"> Comunes</NavLink> 
                <NavLink to="/category/exoticas" className="btn"> Exóticas </NavLink> 
            </div> 
            <CartWidget/>
        </nav>
    )
}

export default Navbar;