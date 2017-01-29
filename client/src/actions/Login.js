import axios from 'axios';

export function login(credentials){
    axios.post( '/api/users/login' , credentials)
    .then((response) => {
        return {
            type: 'LOGGED_IN',
            payload: response
        };
    })
    .catch((response)=> {
        return {
            type: 'LOGIN_FAILED',
            payload: response
        };
    });
}