import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategoryQuestions } from '../actions/categoriesActions';
import CategoryQuestion from '../containers/categoryQuestion';
import Score from '../containers/score';

import '../App.css';

class Category extends Component {

  componentDidMount() {
    this.props.fetchCategoryQuestions(this.props.category.id);
  }

  render() {
    console.log(this.props)
    const {category, questions} = this.props
    return (
      <div className="App">
        <h4 className="App-title">{category.title}</h4>
        <Score history={this.props.history} />
        {questions.map(question=><CategoryQuestion key={question.id} question={question.question} answer={question.answer}/>)}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const category = state.categories.find(category=>category.id == ownProps.match.params.categoryId)
  return {
    category,
    questions: state.categoryQuestions
  };
}

export default connect(mapStateToProps, {fetchCategoryQuestions})(Category);
