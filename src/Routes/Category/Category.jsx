import { useContext, useState, useEffect, Fragment } from 'react';

import ProductCard from '../../components/ProductCard/ProductCard';

import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

import { useParams } from 'react-router-dom';

import './Category.style.jsx';
import { CategoryTitle, CategoryContainer } from './Category.style.jsx';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
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