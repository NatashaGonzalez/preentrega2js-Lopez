import { useContext } from "react"
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";


const Cart = () => {
    const {cart, clearCart, totalQuantity} = useContext(CartContext)

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
            <button onClick={clearCart}>Limpiar carrito</button>
        </div>
    )
}

export default Cart;