import React from 'react';

import {FromInputLable, Input, Group} from './FormInput.style'

const FormInput = ({ lableValue, ...otherProps}) => {
    return (
        <Group>
            <Input {...otherProps}/>
            {lableValue &&(
                <FromInputLable  shrink = {otherProps.value.length} >
                    {lableValue}
                </FromInputLable>
            )}
        </Group>
    );
};

export default FormInput;