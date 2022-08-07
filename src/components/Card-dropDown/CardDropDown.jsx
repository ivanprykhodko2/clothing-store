import { useContext } from 'react';
import Button from '../Button/Button';
import './CardDropDown.style.scss';
import CartItem from '../CartItem/CartItem';

import { CartContext } from '../../Context/Cart.context';

const CardDropDown = () => {
    const { cartItems } = useContext(CartContext);
    console.log(cartItems)

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CardDropDown;