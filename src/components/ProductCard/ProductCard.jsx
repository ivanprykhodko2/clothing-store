import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';

import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import { Name, Price, ProductCardContainer, Footer } from './ProductCard.style.jsx';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product));
    };

    return (

        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />

            <Footer>
                <Name>{name}</Name>
                <Price className='price'>{price}</Price>
            </Footer>

            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>

    );

};

export default ProductCard;