export default (state = {q: "", a: ""}, action) => {
  switch (action.type) {
    case 'FETCH_QUESTION':
      return action.payload
    default:
      return state;
  }
}
