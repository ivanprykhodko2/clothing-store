import React from 'react';
import Button from '../Button/Button';
import './CardDropDown.style.scss';

const CardDropDown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'/>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CardDropDown;