export const InitialState = {
    username: '',
    admin: false
};

export default function(state=InitialState, action){
    switch(action.type){
        case REGISTER_SUCCESS:
            return {...state, success: true};
        case REGISTER_FAIL:
            return {...state, success: false};
        default:
            return state;
    }
}