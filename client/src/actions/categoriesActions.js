import fetch from 'isomorphic-fetch';

export function fetchCategories() {
  return function(dispatch){
    dispatch({type: 'LOADING'})
    return fetch('http://www.jservice.io/api/categories?count=48')
      .then(res => {
        return res.json()
      }).then(categories => {
        dispatch({type: 'FETCH_CATEGORIES', payload: categories})
    })
  }
}

export function fetchCategoryQuestions(id) {
  return function(dispatch){
    dispatch({type: 'LOADING'})
    return fetch(`http://www.jservice.io/api/category?id=${id}`)
      .then(res => {
        return res.json()
      }).then(category => {
        dispatch({type: 'FETCH_CATEGORY_QUESTIONS', payload: category.clues})
    })
  }
}
