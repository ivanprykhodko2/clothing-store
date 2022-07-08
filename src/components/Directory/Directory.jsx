import React from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import './Directory.style.scss';

const Directory = ({categories}) => {
    return (
        <div className='categories-container'>

            {categories.map(({title, id, imageUrl}) => (
                <CategoryItem title={title} key={id} imageUrl={imageUrl}/>
            ))}

        </div>
    );
};

export default Directory;