import { useContext } from "react"
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CarItem from "../../src/CartItem/CartItem";


const Cart = () => {
    const {cart, clearCart, totalQuantity, cartTotal} = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos</h1>
                <Link to='/'>Inicio</Link>
            </div>
        )
    }

    return (
        <div>
            <h1>Tu carrito</h1>
            {cart.map((articulo) => <CartItem key={articulo.id} articulo={articulo}/>)}
            <span>Total: ${cartTotal}</span>
            <button onClick={clearCart}>Limpiar carrito</button>
        </div>
    )
}

export default Cart;