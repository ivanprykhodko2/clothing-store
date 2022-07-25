import React from 'react';
import './FormInput.style.scss';

const FormInput = ({ lableValue, ...otherProps}) => {
    return (
        <div className='group'>
            <input className='form-input' {...otherProps}/>
            {lableValue &&(
                <label 
                    className={`${
                        otherProps.value.length ? 'shrink' : '' 
                    } form-input-label`}
                    >
                    {lableValue}
                </label>
            )}
        </div>
    );
};

export default FormInput;