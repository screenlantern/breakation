import axios from 'axios';
import { AUTH_USER,  UNAUTH_USER } from './types';


export function login(credentials, history) {
    return dispatch => {
        axios.post('http://localhost:9000/api/users/login', credentials)
            .then((response) => {
                dispatch({
                    type: AUTH_USER,
                    payload: response
                });
                localStorage.setItem('token', response.data.token);
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

const token = localStorage.getItem("token");

export function authenticate() {

    return dispatch => {

        axios.post('http://localhost:9000/api/users/verifyToken',
            {token: token},
            {
                'headers': {'Authorization': token}
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