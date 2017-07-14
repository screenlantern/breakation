import axios from 'axios';
import { AUTH_USER,  
         AUTH_ERROR,
         UNAUTH_USER,
         PROTECTED_TEST } from './types';

const jwt = localStorage.getItem("jwt");

export function login(credentials, history){
    return dispatch => {

        axios.post( 'http://localhost:9000/api/users/login' , credentials)
            .then((response) => {
               dispatch({
                    type: AUTH_USER,
                    payload: response
                });
                localStorage.setItem('jwt', response.data.token);
                console.log(credentials);
            }).then(() => {
                history.push('/dashboard')
            })
            .catch((response)=> {
                dispatch({
                    type: UNAUTH_USER,
                    payload: response
                });
                console.log(response);
             });
    }
    
}

export function authenticate(){
    
    return dispatch => {

        axios.post( 'http://localhost:9000/api/users/verifyToken' , 
        {token: jwt}, 
        {'headers': {'Authorization': jwt}
        })
        .then((response) => {
            dispatch({
                type: AUTH_USER,
                payload: response
            });
            console.log('jwt verified');
        })
        .catch((response)=> {
            dispatch({
                type: UNAUTH_USER,
                payload: response
            });
            console.log('invalid user');
        });
    }

}