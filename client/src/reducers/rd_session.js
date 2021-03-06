import { AUTH_USER,  
         UNAUTH_USER } from '../actions/types';

export const InitialState = {
    loggedIn: false,
    shouldRedirect: false,
    errorMessage: null,
    data: []
};

export default function(state = InitialState, action){
    switch(action.type){
        case AUTH_USER:
            return Object.assign({}, state, { loggedIn: true, shouldRedirect: true, data: action.payload });
        case UNAUTH_USER:
            return { ...state,  loggedIn: false, shouldRedirect: false, errorMessage: 'authorization failed'};
        default:
            return state;
    }
}

