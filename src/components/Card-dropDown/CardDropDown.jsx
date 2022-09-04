import { useContext } from 'react';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../Context/Cart.context';

import {CartDropdownContainer, EmptyMessage, CartItems} from './CardDropDown.style'

const CardDropDown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (
                        cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>))
                    ):(
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CardDropDown;