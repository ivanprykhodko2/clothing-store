import ProductCard from '../ProductCard/ProductCard';

import { CategoryPreviewContainer, Title, Preview } from './CategoryPreview.style';

const CategoryPreview = ({ title, products }) => {

    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {
                    products.filter((_, idx) => idx < 4).map((product) =>
                        <ProductCard key={product.id} product={product} />
                    )
                }
            </Preview>

        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;