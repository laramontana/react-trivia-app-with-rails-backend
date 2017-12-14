import { combineReducers } from 'redux';
import question from './questionsReducer';
import categories from './categoriesReducer.js';
import categoryQuestions from './categoryQuesctionsReducer.js';
import records from './recordsReducer';

export default combineReducers({
  question,
  categories,
  categoryQuestions,
  records
});
