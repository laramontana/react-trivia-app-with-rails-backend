import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addRecord } from '../actions/recordsActions';

class Score extends Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();

    if(dd<10) {
        dd = "0"+dd
    }
    if(mm<10) {
        mm = "0"+mm
    }
    today = yyyy + "/" + mm + "/" + dd;

    this.state = {
      score: 0,
      user_name: "",
      date: today
    }
  }

  handleClick = () => {
    if (this.state.score<800) {
      this.setState({
        score: this.state.score+100
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props)
    this.props.addRecord({record: this.state}, this.props.history)
  }

  handleChange = (e) => {
    this.setState({user_name: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>Your score: {this.state.score}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Save score"/>
      </form> <br/>
      <button onClick={this.handleClick} type="button" name="button">Correct</button>
      </div>
    )
  }
}

export default connect(null, {addRecord})(Score);
