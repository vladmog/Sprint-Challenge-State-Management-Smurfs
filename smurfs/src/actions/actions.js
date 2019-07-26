import axios from 'axios';

export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';

export const getData = () => (dispatch) => {
    dispatch ({type: GET_START})
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log("GET RES: ", res)
        dispatch({type: GET_SUCCESS, payload: res})
    })
    .catch(err => {
        console.log("GET ERR: ", err)
        dispatch({type: GET_FAILURE})
    })
  }

export const POST_START = 'POST_START';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

  export const postData = (obj) => (dispatch) => {
    dispatch ({type: POST_START})
    axios
    .post('http://localhost:3333/smurfs', obj)
    .then(res => {
        console.log("POST RES: ", res)
        dispatch({type: POST_SUCCESS, payload: res})
    })
    .catch(err => {
        console.log("POST ERR: ", err)
        dispatch({type: POST_FAILURE})
    })
  }