import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"


const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

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
            <h1>Total: ${total}</h1>
            <button onClick={() => clearCart()}>Limpiar carrito</button>
        </div>
    )
}

export default Cart;