import React, { createContext, useState } from "react";
export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const exists = cartItems.find((item) => item.id === product.id);
        if (exists) return;

        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
}