import React, { Component } from 'react';
import '../App.css';
import Question from '../components/question';
import Answer from '../components/answer';


class CategoryQuestion extends Component {

  constructor() {
    super();
    this.state = {
      answerClicked: false
    };
  }

  handleClick = event => {
    this.setState({
      answerClicked: true
    })
  }

  render() {
    const {question, answer} = this.props
    let showAnswer = this.state.answerClicked ? <Answer answer={answer}/> : null;
    let button = this.state.answerClicked ? null : <button onClick={this.handleClick} type="button" className="answer">Answer</button>;

    return (
      <div>
        <Question question={question}/>
        {showAnswer}
        <br/>
        {button}
      </div>
    );
  }
}

export default CategoryQuestion;
