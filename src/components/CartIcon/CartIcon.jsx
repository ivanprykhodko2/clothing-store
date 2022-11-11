import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartCount, selectIsCartOpen, } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { CartIconContainer, ShoppingIcon, ItemCount } from './CartIcon.style';

const CartIcon = () => {

    const dispatch = useDispatch();

    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    return (
        <CartIconContainer onClick={(toggleIsCartOpen)}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;