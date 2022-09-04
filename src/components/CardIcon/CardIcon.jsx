import React, {useContext} from 'react';

import { CartContext } from '../../Context/Cart.context';

import {CartIconContainer, ShoppingIcon, ItemCount} from './CardIcon.style';

const CardIcon = () => {
    const {isCartOpen, setIsCartOpen, cartItems, cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CardIcon;