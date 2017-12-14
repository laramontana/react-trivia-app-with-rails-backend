import React, {Component} from 'react';

class Score extends Component {

  constructor() {
    super()

    this.state = {
      total: 0
    }
  }

  handleClick = () => {
    if (this.state.total<500) {
      this.setState({
        total: this.state.total+100
      })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} type="button" name="button">Correct</button>
        <h1>Your score:{this.state.total}</h1>
      </div>
    )
  }
}

export default Score
