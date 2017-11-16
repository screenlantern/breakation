import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

export function register(credentials, history) {
    return dispatch => {
        axios.post('http://localhost:9000/api/users', credentials)
            .then((response) => {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: response
                });
            })
            .catch((response) => {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: response
                })
            });
    };
}