import React, {Component} from 'react';

class Score extends Component {

  constructor() {
    super()

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    }
    if(mm<10) {
        mm = '0'+mm
    }
    today = yyyy + '/' + mm + '/' + dd;

    this.state = {
      score: 0,
      user_name: '',
      date: today
    }
  }

  handleClick = () => {
    if (this.state.score<500) {
      this.setState({
        score: this.state.score+100
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addRecord(this.state)
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

export default Score;
