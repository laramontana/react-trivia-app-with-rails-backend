export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RECORDS':
      return action.payload
    default:
      return state;
  }
}
