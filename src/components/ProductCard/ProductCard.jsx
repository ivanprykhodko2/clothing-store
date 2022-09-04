import { useContext } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';

import { CartContext } from '../../Context/Cart.context';

import { Name, Price, ProductCardContainer, Footer } from './ProductCard.style.jsx';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const { addItemToCart, cartItems } = useContext(CartContext);

    const addProductToCart = () => {
        console.log(cartItems);
        addItemToCart(product);
    };

    return (

        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>

            <Footer>
                <Name>{name}</Name>
                <Price className='price'>{price}</Price>
            </Footer>   

            <Button buttonType={ BUTTON_TYPE_CLASSES.inverted } onClick={addProductToCart}>Add to cart</Button>         
        </ProductCardContainer>

    );

};

export default ProductCard;