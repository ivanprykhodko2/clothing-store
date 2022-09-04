import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItem, productToAdd) => {

    for(let i=0; i< cartItem.length; i++){
        const cartItemData = cartItem[i];

        if(cartItemData.id === productToAdd.id){
            cartItemData.quantity++;
            return [...cartItem]; 
        }
    }

    return [...cartItem, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    
}

const deleteCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    completelyRemoveItem: () => {},
    cartCount: 0,
    productPrice: 0,
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [productPrice, setProductPrice] = useState(0);

    useEffect(() =>{
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);

        const newProductPrice = cartItems.reduce((total, cartItem) => total + (cartItem.price*cartItem.quantity), 0);
        setProductPrice(newProductPrice);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {

        setCartItem(addCartItem(cartItems, productToAdd));
        
    }

    const removeItemFromCart = (cartItemToRemove) => {

        setCartItem(removeCartItem(cartItems, cartItemToRemove));

    }

    const completelyRemoveItem = (productToRemove) => {
        setCartItem(deleteCartItem(cartItems, productToRemove));
    }
    
    const value = {
        isCartOpen, 
        setIsCartOpen, 
        cartItems, 
        addItemToCart, 
        cartCount, 
        productPrice,
        removeItemFromCart, 
        completelyRemoveItem
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}