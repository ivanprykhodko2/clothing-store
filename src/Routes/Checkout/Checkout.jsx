import { useSelector } from 'react-redux';
import { selectCartItems, selectProductPrice } from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import { CheckOutConatiner, CheckoutHeader, HeaderBlock, Total } from './Checkout.style'

const Checkout = () => {

    const cartItems = useSelector(selectCartItems);
    const productPrice = useSelector(selectProductPrice);
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

            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} cartItems={cartItems} />
            ))}

            <Total>Total: {productPrice}</Total>

        </CheckOutConatiner>
    );
};

export default Checkout;