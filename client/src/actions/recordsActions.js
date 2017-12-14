import fetch from 'isomorphic-fetch';

export function fetchRecords() {
  return function(dispatch){
    dispatch({type: 'LOADING'})
    return fetch(`/records`)
      .then(res => {
        debugger
        return res.json()
      }).then(records => {

        dispatch({type: 'FETCH_RECORDS', payload: records})
    })
  }
}
