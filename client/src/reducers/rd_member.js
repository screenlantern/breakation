import { ADD_SUCCESS, ADD_FAIL } from '../actions/types';

export const InitialState = {
    success: false
};

export default function(state=InitialState, action){
    switch(action.type){
        case ADD_SUCCESS:
            return {...state, success: true};
        case ADD_FAIL:
            return {...state, success: false};
        default:
            return state;
    }
}