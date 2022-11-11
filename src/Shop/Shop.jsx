import { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import CategoriesPreview from '../Routes/CategoriesPreview/CategoriesPreview';
import Category from '../Routes/Category/Category';
import { setCategories } from '../store/categories/categories.action';

import { getCategoriesAndDocuments } from '../Utils/Firebase/Firebase.utils';

const Shop = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesArray));
        }
        getCategoriesMap();
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
};

export default Shop;