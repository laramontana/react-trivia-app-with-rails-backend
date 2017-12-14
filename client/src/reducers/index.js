import { combineReducers } from 'redux';
import question from './questionsReducer';
import categories from './categoriesReducer.js';
import categoryQuestions from './categoryQuesctionsReducer.js';

export default combineReducers({
  question,
  categories,
  categoryQuestions
});
