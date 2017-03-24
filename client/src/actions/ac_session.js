import axios from 'axios';

export function login(credentials, history){
    return dispatch => {

        axios.post( 'http://localhost:9000/api/users/login' , credentials)
            .then((response) => {
               dispatch({
                    type: 'VALID_USER',
                    payload: response
                });
                localStorage.setItem('jwt', response.data.token);
                console.log(credentials);
            }).then(() => {
                history.push('/dashboard')
            })
            .catch((response)=> {
                dispatch({
                    type: 'INVALID_USER',
                    payload: response
                });
                console.log(response);
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