import { CART_ACTION_VALUE } from "./cart.type";

import { createActions } from "../../Utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

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

export const setIsCartOpen = (boolean) =>
    createActions(CART_ACTION_VALUE.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {

    const newCartItems = addCartItem(cartItems, productToAdd);
    return createActions(CART_ACTION_VALUE.SET_CART_ITEMS, newCartItems);

}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createActions(CART_ACTION_VALUE.SET_CART_ITEMS, newCartItems);

}

export const completelyRemoveItem = (cartItems, productToRemove) => {

    const newCartItems = deleteCartItem(cartItems, productToRemove);
    return createActions(CART_ACTION_VALUE.SET_CART_ITEMS, newCartItems);

}