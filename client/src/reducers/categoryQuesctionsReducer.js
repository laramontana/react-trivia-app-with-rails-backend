export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CATEGORY_QUESTIONS':
      return action.payload
    default:
      return state;
  }
}
