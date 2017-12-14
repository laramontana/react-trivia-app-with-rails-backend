import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestion } from '../actions/questionsActions';
import Question from '../components/question';
import Answer from '../components/answer';
import '../App.css';

class Quiz extends Component {

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

  handleClickNext = event => {
    this.setState({
      answerClicked: false
    })
    this.props.fetchQuestion()
  }

  componentDidMount() {
    this.props.fetchQuestion()
  }

  render() {
    const {question} = this.props
    let answer = this.state.answerClicked ? <Answer answer={question.a}/> : null;
    let next = this.state.answerClicked ? <button onClick={this.handleClickNext} type="button" className="next">Next Question</button> : null;

    return (
      <div className="App">
        <div className="App-intro">
          <Question question={question.q}/>
          <button onClick={this.handleClick} type="button" className="answer">Answer</button>
          {next}
          {answer}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {question: state.question}
}

export default connect(mapStateToProps, {fetchQuestion})(Quiz);
