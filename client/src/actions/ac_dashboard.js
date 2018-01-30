import axios from 'axios';
import {
    ADD_SUCCESS,
    ADD_FAIL
} from './types';

export function addMember(credentials, history) {
    return dispatch => {
        axios.post('http://localhost:9000/api/users', credentials)
            .then((response) => {
                dispatch({
                    type: ADD_SUCCESS,
                    payload: response
                });
            })
            .catch((response) => {
                dispatch({
                    type: ADD_SUCCESS,
                    payload: response
                })
            });
    };
}