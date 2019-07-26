import axios from 'axios';

export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';

export const getData = () => (dispatch) => {
    dispatch ({type: GET_START})
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log("GETPOSTS RES: ", res)
        dispatch({type: GET_SUCCESS, payload: res})
    })
    .catch(err => {
        console.log("GETPOSTS ERR: ", err)
        dispatch({type: GET_FAILURE})
    })
  }