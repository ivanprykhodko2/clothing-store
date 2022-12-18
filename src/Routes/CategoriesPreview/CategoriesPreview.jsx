import { Fragment, useContext } from 'react';

import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectIsloadingCategories } from '../../store/categories/categories.selector';

import CategoryPreview from '../../components/Category-Preview/CategoryPreview';
import Spinner from '../../components/spinner/Spinner';


const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoadingCategories = useSelector(selectIsloadingCategories);

    return (
        <Fragment>
            {
                isLoadingCategories ? (
                    <Spinner />
                ) : (
                    Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title];
                        return <CategoryPreview key={title} products={products} title={title} />
                    })
                )
            }
        </Fragment>
    );
};

export default CategoriesPreview;