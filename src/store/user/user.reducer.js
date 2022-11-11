import { USER_ACTIONS_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
}

export const userReduser = (state = INITIAL_STATE, action) =>{
    const {type, payload} = action;

    switch(type) {
        case USER_ACTIONS_TYPES.SET_CURRENT_USER:
            return {
                currentUser: payload,
            }
        default:
            return state;
    }
}