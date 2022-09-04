import { useContext } from 'react';

import { CartContext } from '../../Context/Cart.context';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import { CheckOutConatiner,  CheckoutHeader, HeaderBlock, Total } from './Checkout.style'

const Checkout = () => {

    const { cartItems, productPrice } = useContext(CartContext);
    return (
        <CheckOutConatiner>
            <CheckoutHeader>

                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>

            </CheckoutHeader>

            {cartItems.map(( cartItem ) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}

            <Total>Total: {productPrice}</Total>

        </CheckOutConatiner>
    );
};

export default Checkout;