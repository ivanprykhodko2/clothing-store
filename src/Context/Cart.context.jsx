import { createContext, useReducer } from "react";

import { createActions } from "../Utils/reducer/reducer.utils";

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

export const CART_ACTION_VALUE = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
    cartCount: 0,
    productPrice: 0,
    cartItems: [],
    isCartOpen: false,
};

const cartReducer = (state, action) => {
    const {type, payload} = action;
    console.log(state);
    console.log('-----------------')
    console.log(payload);

    switch(type){
        case CART_ACTION_VALUE.SET_CART_ITEMS:
            return {
                ...state, 
                ...payload,
            };
        case CART_ACTION_VALUE.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            }

        default:
            throw new Error(`unhandler type of ${type} in cartReducer`)
    }
}

export const CartProvider = ({children}) => {

    const [{cartItems, isCartOpen, cartCount, productPrice}, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItem] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [productPrice, setProductPrice] = useState(0);

    // useEffect(() =>{
    //     const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    //     setCartCount(newCartCount);

    //     const newProductPrice = cartItems.reduce((total, cartItem) => total + (cartItem.price*cartItem.quantity), 0);
    //     setProductPrice(newProductPrice);
    // }, [cartItems])

    const updateCartItemReducer = (newCartItems) =>{
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

        const newProductPrice = newCartItems.reduce((total, cartItem) => total + (cartItem.price*cartItem.quantity), 0);

        dispatch(
            createActions(CART_ACTION_VALUE.SET_CART_ITEMS, {
                cartItems: newCartItems, 
                cartCount: newCartCount, 
                productPrice: newProductPrice,
            })
        );
    }

    const addItemToCart = (productToAdd) => {

        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemReducer(newCartItems);
        
    }

    const removeItemFromCart = (cartItemToRemove) => {

        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemReducer(newCartItems);

    }

    const completelyRemoveItem = (productToRemove) => {

        const newCartItems = deleteCartItem(cartItems, productToRemove);
        updateCartItemReducer(newCartItems);

    }

    const setIsCartOpen = (bool) => {
        dispatch(createActions(CART_ACTION_VALUE.SET_IS_CART_OPEN, bool));
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