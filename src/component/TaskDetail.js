import React from 'react';
import { connect } from 'react-redux';
import { addToDeleteList, currentTask } from '../action/listAction';

class TaskDetail extends React.Component {
  state = { isClick: false, isComplete: false };

  handleOnClick = e => {
    this.setState({ isClick: !this.state.isClick }, e => {
      if (this.state.isClick) {
        this.props.currentTask({
          task: this.props.task,
          isClick: this.state.isClick,
          isComplete: this.state.isComplete
        });

        this.props.addToDeleteList(this.props.task);
      }
    });
  };

  render() {
    const { task, isComplete, taskName } = this.props;
    return (
      <div>
        <input
          type='radio'
          checked={this.state.isClick}
          name={task}
          onClick={this.handleOnClick}
        />
        {task}
        {isComplete === 'true' && taskName === task ? (
          <span> Completed</span>
        ) : (
          ''
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isComplete: state.currentTask.isComplete,
    taskName: state.currentTask.task
  };
};

export default connect(
  mapStateToProps,
  { addToDeleteList, currentTask }
)(TaskDetail);
