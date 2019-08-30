import React from 'react';
import { connect } from 'react-redux';
import TaskDetail from '../component/TaskDetail';

const ListContainer = ({ listArr }) => {
  const lists = listArr.map(list => <TaskDetail task={list} />);
  return <div>{lists}</div>;
};

const mapStateToProps = state => {
  return { listArr: state.listArr };
};

export default connect(mapStateToProps)(ListContainer);
