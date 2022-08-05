import React, { useContext } from 'react';
import Button from '../Button/Button';
import { CartItemContext } from '../../Context/CartItem.context';
import './ProductCard.style.scss';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const {cartProducts, setCartProducts} = useContext(CartItemContext);

    const addItemtoCart = () => {
        console.log(cartProducts);
        setCartProducts([product, ...cartProducts])
    }

    return (

        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>

            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>   

            <Button buttonType='inverted' onClick={addItemtoCart}>Add to cart</Button>         
        </div>

    );

};

export default ProductCard;