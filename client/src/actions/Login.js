import axios from 'axios';

export function login(credentials){
    return dispatch => {

        axios.post( 'http://localhost:9000/api/users/login' , credentials)
            .then((response) => {
               dispatch({
                    type: 'LOGGED_IN',
                    payload: response
                });
                console.log(credentials);
            })
            .catch((response)=> {
                dispatch({
                    type: 'LOGIN_FAILED',
                    payload: response
                });
                console.log('login failed');
        });
    }
    
}