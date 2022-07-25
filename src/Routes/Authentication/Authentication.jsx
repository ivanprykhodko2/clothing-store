// import {useEffect} from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/Sign-Up-Form/SignUpForm.jsx';
import SignInForm from '../../components/Sign-In-Form/SignInForm.jsx';

import './Authentication.scss';


const Authentication = () => {
    // useEffect(() => {
    //     async function RedirectResult() {
    //         const response = await getRedirectResult(auth);
    //         if(response) const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    //     RedirectResult();
    // },  []);

    return (
        <div className='authentication-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
};

export default Authentication;