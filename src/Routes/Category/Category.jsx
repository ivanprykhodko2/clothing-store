import { useContext, useState, useEffect, Fragment } from 'react';

import ProductCard from '../../components/ProductCard/ProductCard';

import { CategoriesContext } from '../../Context/Categories.context';

import { useParams } from 'react-router-dom';

import './Category.style.jsx';
import { CategoryTitle, CategoryContainer } from './Category.style.jsx';

const Category = () => {
    const { category }  = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [categoriesMap, category])

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>
        </Fragment>
    );
};

export default Category;