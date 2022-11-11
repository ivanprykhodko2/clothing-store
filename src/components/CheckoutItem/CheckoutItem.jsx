import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart, completelyRemoveItem } from '../../store/cart/cart.action';

import { CheckoutItemContainer, ImageConatiner, Name, Quantity, Price, Arrow, Value, RemoveButton } from './CheckoutItem.style';


const CheckoutItem = ({ cartItem, cartItems }) => {
    console.log(cartItems);

    const dispatch = useDispatch();

    const { name, imageUrl, price, quantity } = cartItem;
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const completelyRemoveItemHandler = () => dispatch(completelyRemoveItem(cartItems, cartItem));

    return (
        <CheckoutItemContainer>

            <ImageConatiner>
                <img src={imageUrl} alt={`${name}`} />
            </ImageConatiner>
            <Name> {name} </Name>
            <Quantity>

                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>

                <Value>{quantity}</Value>

                <Arrow onClick={addItemHandler}>&#10095;</Arrow>

            </Quantity>
            <Price> {price} </Price>
            <RemoveButton onClick={completelyRemoveItemHandler}>&#10005;</RemoveButton>

        </CheckoutItemContainer>
    );
};

export default CheckoutItem;