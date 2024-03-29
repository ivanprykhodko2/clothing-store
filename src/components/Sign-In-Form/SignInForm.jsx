import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import FormInput from '../FormInput/FormInput';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';

import { SignInContainer, ButtonContainer } from './SignInForm.style'

import {
    signInAuthUserWithEmailAndPassword
} from '../../Utils/Firebase/Firebase.utils.js';

import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';
import { signInWithEmailAndPassword } from 'firebase/auth';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {

    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        console.log(formFields)
    };

    const logGoogleUser = async () => {
        dispatch(googleSignInStart())
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Password has been wrong!');
                    break;
                case 'auth/user-not-found':
                    alert('Incorrect email');
                    break;
                default:
                    console.log(error)
            }
        }

    }

    return (
        <SignInContainer>
            <h2>Have an account?</h2>
            <span>Sign In with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput lableValue="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput lableValue="Passowrd" type="password" required onChange={handleChange} name="password" value={password} />

                <ButtonContainer>
                    <Button type="submit">Sign In</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={logGoogleUser}>Sign In with Google</Button>
                </ButtonContainer>

            </form>

        </SignInContainer>
    );
};

export default SignInForm;