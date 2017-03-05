import login from '../actions/Login';

export const InitialState = {
    loggedIn: false,
    shouldRedirect: false,
    errorMessage: null
}

export default function(state = InitialState, action){
    switch(action.type){
        case 'LOGGED_IN':
            return Object.assign({}, state, { loggedIn: true, shouldRedirect: true });
            console.log('loggged in');
        case 'LOGIN_FAILED':
            return { ...state,  loggedIn: false, shouldRedirect: false, errorMessage: ''  };
        default:
            return state;
    }

}

