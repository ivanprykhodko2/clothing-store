import React, {useContext} from 'react';
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';
import { CartContext } from '../../Context/Cart.context';
import './CardIcon.style.scss';

const CardIcon = () => {
    const {isCartOpen, setIsCartOpen, cartItems, cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    );
};

export default CardIcon;