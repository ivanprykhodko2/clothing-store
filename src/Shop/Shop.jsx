import {useContext} from 'react';
import { ProductContext } from '../Context/Product.context';
import ProductCard from '../components/ProductCard/ProductCard';
import './Shop.style.scss';

const Shop = () => {
    const { products } = useContext(ProductContext);

    return (
        <div className='porducts-conatiner'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default Shop;