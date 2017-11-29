export const InitialState = {

};

export default function(state=InitialState, action){
    switch(action.type){
        case '':
            return {...state};
        default:
            return state;
    }
}