import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList, deleteTask, completeTask } from '../action/listAction';
class InputField extends Component {
  state = {
    term: ''
  };

  handleOnChange = e => {
    this.setState({ term: e.target.value });
  };

  handleOnClick = e => {
    if (e.target.value === 'Add') {
      if (this.state.term !== '') {
        this.props.addToList(this.state.term);
      }

      this.setState({ term: '' });
    }
    if (e.target.value === 'Delete') {
      this.props.deleteTask(this.props.deleteArr);
    }
    if (e.target.value === 'Complete') {
      this.props.completeTask();
    }
  };

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.term}
          onChange={this.handleOnChange}
        />
        <input type='button' value='Add' onClick={this.handleOnClick} />
        <input type='button' value='Delete' onClick={this.handleOnClick} />
        <input type='button' value='Complete' onClick={this.handleOnClick} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { term: state.term, deleteArr: state.deleteTaskArr };
};

export default connect(
  mapStateToProps,
  { addToList, deleteTask, completeTask }
)(InputField);
