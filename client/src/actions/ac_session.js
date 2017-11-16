import axios from 'axios';
import { AUTH_USER,  UNAUTH_USER } from './types';


export function login(credentials, history) {
    return dispatch => {
        axios.post('http://localhost:9000/api/auth/login', credentials)
            .then((response) => {
                dispatch({
                    type: AUTH_USER,
                    payload: response
                });
                setToken(response.data.token);
                console.log(credentials);
            })
            .then(() => {
                history.push('/dashboard')
            })
            .catch((response) => {
                dispatch({
                    type: UNAUTH_USER,
                    payload: response
                });
                console.log(response);
            });
    };
}

export function getToken(){
    return localStorage.getItem("token");
}

export function setToken(val){
    localStorage.setItem('token', val)
}

export function authenticate() {

    return dispatch => {

        axios.post('http://localhost:9000/api/auth/verifyToken',
            {token: getToken()},
            {
                'headers': {'Authorization': getToken()}
            })
            .then((response) => {
                dispatch({
                    type: AUTH_USER,
                    payload: response
                });
                console.log('jwt verified');
            })
            .catch((response) => {
                dispatch({
                    type: UNAUTH_USER,
                    payload: response
                });
                console.log('invalid user');
            });
    }

}