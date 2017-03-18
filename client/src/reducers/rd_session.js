import login from '../actions/ac_session';

export const InitialState = {
    loggedIn: false,
    shouldRedirect: false,
    errorMessage: null
}

export default function(state = InitialState, action){
    switch(action.type){
        case 'VALID_USER':
            return Object.assign({}, state, { loggedIn: true, shouldRedirect: true });
        case 'INVALID_USER':
            return { ...state,  loggedIn: false, shouldRedirect: false, errorMessage: 'Login failed please check credentials'};
        default:
            return state;
    }

}

