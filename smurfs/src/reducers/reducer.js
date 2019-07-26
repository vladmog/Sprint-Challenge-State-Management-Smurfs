import {GET_START, GET_SUCCESS, GET_FAILURE} from '../actions/actions';

let initialState = {
    smurfs: []
}


export default function reducer (state = initialState, action){
    switch(action.type){
        case GET_START:
            return {
                ...state
            }      
        case GET_SUCCESS:
            return {
                ...state,
                smurfs: action.payload.data
            }          
        case GET_FAILURE:
            return {
                ...state
            } 
        default:
            return state
    }
}

