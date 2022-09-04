import { useContext } from 'react';

import { CartContext } from '../../Context/Cart.context';

import { CheckoutItemContainer, ImageConatiner, Name, Quantity, Price, Arrow, Value, RemoveButton } from './CheckoutItem.style';  


const CheckoutItem = ( {cartItem} ) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { completelyRemoveItem, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>

            <ImageConatiner>
                <img src={imageUrl} alt={`${name}`}/>
            </ImageConatiner>
            <Name> {name} </Name>
            <Quantity> 

                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>

                <Value>{quantity}</Value> 

                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            
            </Quantity>
            <Price> {price} </Price>
            <RemoveButton onClick={() => completelyRemoveItem(cartItem)}>&#10005;</RemoveButton>

        </CheckoutItemContainer>
    );
};

export default CheckoutItem;