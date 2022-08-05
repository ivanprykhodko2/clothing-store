import { createContext, useState, useContext } from "react";

export const CartItemContext = createContext({
    cartProducts: [],
    setCartProducts: () => {},
})

export const CartItemProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const value = {cartProducts, setCartProducts};
    return (
        <CartItemContext.Provider value={value}>{children}</CartItemContext.Provider>
    )
}