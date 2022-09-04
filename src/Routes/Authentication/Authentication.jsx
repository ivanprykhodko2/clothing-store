// import {useEffect} from 'react';
import SignUpForm from '../../components/Sign-Up-Form/SignUpForm.jsx';
import SignInForm from '../../components/Sign-In-Form/SignInForm.jsx';

import { AuthenticationContainer } from './Authentication.style'


const Authentication = () => {
    // useEffect(() => {
    //     async function RedirectResult() {
    //         const response = await getRedirectResult(auth);
    //         if(response) const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    //     RedirectResult();
    // },  []);

    return (
        <AuthenticationContainer>
            <SignInForm/>
            <SignUpForm/>
        </AuthenticationContainer>
    );
};

export default Authentication;