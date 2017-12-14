import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecords } from '../actions/recordsActions';
import '../App.css';

class Records extends Component {

  componentDidMount() {
    this.props.fetchRecords()
  }

  render() {
    const showRecords = this.props.records.map(record=><div><p>{record.user_name} - score: {record.score} ({record.date.slice(0, 10)})</p></div>)
    return (
      <div className="App">
        <h4 className="App-title">Records</h4>
          {showRecords}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {records: state.records}
}

export default connect(mapStateToProps, {fetchRecords})(Records);
