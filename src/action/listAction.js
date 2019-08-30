const ADD_TO_LIST = 'ADD_TO_LIST';
const ADD_TO_DELETE_LIST = 'ADD_TO_DELETE_LIST';
const DELETE_TASK = 'DELETE_TASK';
const CURRENT_TASK = 'CURRENT_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';

export const completeTask = () => ({ type: COMPLETE_TASK, payload: 'true' });

export const currentTask = task => ({ type: CURRENT_TASK, payload: task });

export const deleteTask = tasks => ({ type: DELETE_TASK, payload: tasks });

export const addToList = task => ({ type: ADD_TO_LIST, payload: task });
export const addToDeleteList = task => ({
  type: ADD_TO_DELETE_LIST,
  payload: task
});
