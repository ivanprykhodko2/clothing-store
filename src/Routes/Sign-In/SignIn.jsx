import React from 'react';
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
  } from '../../Utils/Firebase/Firebase.utils.js';


const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In page</h1>

            <button onClick={logGoogleUser}>
                Sign In with Google 
            </button>
        </div>
    );
};

export default SignIn;