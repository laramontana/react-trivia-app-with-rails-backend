import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecords } from '../actions/recordsActions';
import '../App.css';

class Records extends Component {

  componentDidMount() {
    this.props.fetchRecords()
  }

  render() {
    let sortRecords = (record1, record2) => {
      if (+record1.score < +record2.score) {
        return 1
      }
      if (+record1.score > +record2.score) {
        return -1
      } else {return 0}
    }
    const records = this.props.records
    const sortedRecords = records.sort(sortRecords)
    const showRecords = sortedRecords.map(record=><div key={record.id}><p>{record.user_name} - score: {record.score} ({record.date})</p></div>)

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
