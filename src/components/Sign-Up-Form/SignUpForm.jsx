import React,  { useState, useContext }  from 'react';
import FormInput from '../FormInput/FormInput';
import './SignUpForm.style.scss';
import Button from '../Button/Button';

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
    const [formFields, setFormFields] = useState(defaultFormFields);    
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password != confirmPassword){alert('Password is not same');return;} 
        try{

            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();

        }catch(error){

            if(error.code == 'auth/email-already-in-use'){
                alert('email already in use');
            }else{
                console.log(error);
            }

        }

    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password</span>
            
            <form onSubmit={handleSubmit}>

                <FormInput lableValue="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput lableValue="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput lableValue="Passowrd" type="password" required onChange={handleChange} name="password" value={password}/>

                <FormInput lableValue="Confirm Passowrd" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <Button type="submit">Sign Up</Button>

            </form>
        </div>
    );
};

export default SignUpForm;