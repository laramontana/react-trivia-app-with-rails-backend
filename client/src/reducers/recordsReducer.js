export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RECORDS':
      return action.payload
    case 'ADD_RECORD':
      return state.concat(action.payload)
    default:
      return state;
  }
}
