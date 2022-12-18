import { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import CategoriesPreview from '../Routes/CategoriesPreview/CategoriesPreview';
import Category from '../Routes/Category/Category';
import { fetchCategoriesStart } from '../store/categories/categories.action';

const Shop = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
};

export default Shop;