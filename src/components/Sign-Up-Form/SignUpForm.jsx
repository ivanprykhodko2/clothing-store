import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import FormInput from '../FormInput/FormInput';

import Button from '../Button/Button';

import { signUpStart } from '../../store/user/user.action';

import { SignUpContainer } from './SignUpForm.style'

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from '../../Utils/Firebase/Firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) { alert('Password is not same'); return; }
        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormFields();

        } catch (error) {

            if (error.code === 'auth/email-already-in-use') {
                alert('email already in use');
            } else {
                console.log(error);
            }

        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput lableValue="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <FormInput lableValue="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput lableValue="Passowrd" type="password" required onChange={handleChange} name="password" value={password} />

                <FormInput lableValue="Confirm Passowrd" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <Button type="submit">Sign Up</Button>

            </form>
        </SignUpContainer>
    );
};

export default SignUpForm;