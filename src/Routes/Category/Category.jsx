import { useContext, useState, useEffect } from 'react';

import ProductCard from '../../components/ProductCard/ProductCard';

import { CategoriesContext } from '../../Context/Categories.context';

import { useParams } from 'react-router-dom';

import './Category.style.scss';

const Category = () => {
    const { category }  = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [categoriesMap, category])

    return (
        <div className='category-container'>
            {products &&
                products.map((product) => <ProductCard key={product.id} product={product} />)
            }
        </div>
    );
};

export default Category;