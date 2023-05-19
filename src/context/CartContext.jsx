import { createContext, useContext, useState } from "react"

export const CartContext = createContext({
    cart:[]
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])
    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart (prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const cartQuantity = () => {
        return cart.reduce ((acc, prod)=> acc += prod.quantity, 0)
    }

    const cartTotal = () => {
        return cart.reduce ((acc, prod) => acc += prod.quantity, 0)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, cartTotal, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)