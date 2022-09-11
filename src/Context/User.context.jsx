import { createContext, useEffect, useState, useReducer} from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../Utils/Firebase/Firebase.utils";
import { createActions } from "../Utils/reducer/reducer.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTIONS_TYPES = {
    SET_CURRENT_USER:  'SET_CURRENT_USER', 

}

const userReduser = (state, action) =>{
    console.log('dispathced');
    console.log(action);
    const {type, payload} = action;

    switch(type) {
        case USER_ACTIONS_TYPES.SET_CURRENT_USER:
            return {
                currentUser: payload,
            }
        default:
            throw new Error(`Unhandler type ${type} in the userReducer`);
    }
}

const INITIAL_STATE = {
    currentUser: null,
}

export const UserProvider = ({children}) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [ { currentUser }, dispatch ] = useReducer(userReduser, INITIAL_STATE);

    console.log(currentUser);

    const setCurrentUser = (user) => {
        dispatch(createActions(USER_ACTIONS_TYPES.SET_CURRENT_USER, user));
    }

    const value = {currentUser, setCurrentUser};

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user) =>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}