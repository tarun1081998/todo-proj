// src/redux/reducers/counterReducer.js
import { ADDTASK, DELETETASK } from '../actions/actionTypes';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, data) => {
  switch (data.type) {
    case ADDTASK:
      return {
        tasks:[...state.tasks, data.payload],
      };
    case DELETETASK:
      return {
        tasks: state.tasks.filter(x=>x.id !== data.payload.id),
      };
    default:
      return state;
  }
};

export default taskReducer;
