import {GET_START, GET_SUCCESS, GET_FAILURE, POST_START, POST_SUCCESS, POST_FAILURE} from '../actions/actions';

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

        case POST_START:
            return {
                ...state
            }      
        case POST_SUCCESS:
            return {
                ...state,
                smurfs: action.payload.data
            }          
        case POST_FAILURE:
            return {
                ...state
            } 
        default:
            return state
    }
}

