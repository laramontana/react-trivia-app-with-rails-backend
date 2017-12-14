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


export function addRecord(rec) {
  return function(dispatch){
    dispatch({type: 'LOADING'})
    return fetch(`/api/records`, {
      method: 'POST',
      body: rec,
    })
      .then(res => {
        debugger
        return res.json()
      }).then(record => {
        debugger
        dispatch({type: 'ADD_RECORD', payload: record})
    })
  }
}
