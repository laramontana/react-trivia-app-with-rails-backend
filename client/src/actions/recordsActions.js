import fetch from 'isomorphic-fetch';
// const API_URL = process.env.REACT_APP_API_URL;

export function fetchRecords() {
  return function(dispatch){
    dispatch({type: 'LOADING'})
    return fetch("/api/records")
      .then(res => {
        return res.json()
      }).then(records => {
        dispatch({type: 'FETCH_RECORDS', payload: records})
    })
  }
}


export function addRecord(rec, history) {
  return function(dispatch){
    dispatch({type: 'LOADING'})
    return fetch(`/api/records`, {
      credentials: "include",
      method: "POST",
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
      },
      body: JSON.stringify(rec)
    })
      .then(res => {
        return res.json()
      }).then(record => {
        dispatch({type: 'ADD_RECORD', payload: record})
        history.push('/records')
    })
  }
}
