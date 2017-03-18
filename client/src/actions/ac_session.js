import axios from 'axios';

export function login(credentials){
    return dispatch => {

        axios.post( 'http://localhost:9000/api/users/login' , credentials)
            .then((response) => {
               dispatch({
                    type: 'VALID_USER',
                    payload: response
                });
                localStorage.setItem('jwt', response.data.token);
                console.log(credentials);
            })
            .catch((response)=> {
                dispatch({
                    type: 'INVALID_USER',
                    payload: response
                });
                console.log('login failed');
             });
    }
    
}

export function validity(jwt){
    return dispatch => {

        axios.post( 'http://localhost:9000/api/users/validityCheck' , jwt)
            .then((response) => {
               dispatch({
                    type: 'VALID_USER',
                    payload: response
                });
                console.log('jwt verified');
            })
            .catch((response)=> {
                dispatch({
                    type: 'INVALID_USER',
                    payload: response
                });
                console.log('invalid user');
        });
    }
    
}