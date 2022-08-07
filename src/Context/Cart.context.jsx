import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItem, productToAdd) => {

    for(let i=0; i< cartItem.length; i++){
        const cartItemData = cartItem[i];

        if(cartItemData.id == productToAdd.id){
            cartItemData.quantity++;
            return [...cartItem]; 
        }
    }

    return [...cartItem, {...productToAdd, quantity: 1}];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() =>{
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {

        setCartItem(addCartItem(cartItems, productToAdd));
        
    }
    
    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount};
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}