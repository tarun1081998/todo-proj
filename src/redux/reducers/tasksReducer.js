// src/redux/reducers/counterReducer.js
import { ADDTASK, DELETETASK } from '../actions/actionTypes';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action, data) => {
  switch (action.type) {
    case ADDTASK:
      return {
        tasks:[...state.tasks, data],
      };
    case DELETETASK:
      return {
        tasks: state.tasks.filter(x=>x.id !== data.id),
      };
    default:
      return state;
  }
};

export default taskReducer;
