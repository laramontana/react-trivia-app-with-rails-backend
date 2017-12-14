import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecords } from '../actions/recordsActions';
import CategoryQuestion from '../containers/categoryQuestion';
import Score from '../containers/score';

import '../App.css';

class Records extends Component {

  componentDidMount() {
    this.props.fetchRecords()
  }

  render() {
    const {records} = this.props
    return (
      <div className="App">
        <h4 className="App-title">Records</h4>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {records: state.records}
}

export default connect(mapStateToProps, {fetchRecords})(Records);
