import React, {useState, useContext} from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './SignInForm.style.scss';

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
  } from '../../Utils/Firebase/Firebase.utils.js';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);    
    const {email, password} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
        console.log(formFields)
    };

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        }catch(error){
            switch(error.code){
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
        <div className='sign-in-container'>
            <h2>Have an account?</h2>
            <span>Sign In with your email and password</span>

            <form onSubmit={handleSubmit}>

                    <FormInput lableValue="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                    <FormInput lableValue="Passowrd" type="password" required onChange={handleChange} name="password" value={password}/>

                    <div className='buttons-container'>
                        <Button type="submit">Sign In</Button>
                        <Button buttonType='google' type="button" onClick={logGoogleUser}>Sign In with Google</Button>
                    </div>

            </form>

        </div>
    );
};

export default SignInForm;