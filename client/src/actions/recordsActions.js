import fetch from 'isomorphic-fetch';
// const API_URL = process.env.REACT_APP_API_URL;

export function fetchRecords() {
  return function(dispatch){
    dispatch({type: 'LOADING'})
    return fetch(`/api/records`)
      .then(res => {
        return res.json()
      }).then(records => {
        dispatch({type: 'FETCH_RECORDS', payload: records})
    })
  }
}
