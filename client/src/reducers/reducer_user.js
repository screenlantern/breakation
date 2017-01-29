const initialState = {
    loggedIn: false,
    shouldRedirect: false,
    errorMessage: null
}

export default function(state = initialState, action){
    switch(action.type){
        case 'LOGGED_IN':
            return Object.assign({}, state, { loggedIn: true, shouldRedirect: true });
        case 'LOGIN_FAILED':
            return Object.assign({}, state, { loggedIn: false, shouldRedirect: false, errorMessage: '' });
        default:
            return state;
    }

}

