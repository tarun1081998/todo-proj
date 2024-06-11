// src/redux/reducers/counterReducer.js
import { ADDTASK, DELETETASK, UPDATETASK } from '../actions/actionTypes';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, data) => {
  switch (data.type) {
    case ADDTASK:
      return {
        tasks:[data.payload, ...state.tasks],
      };
    case DELETETASK:
      return {
        tasks: state.tasks.filter(x=>x.id !== data.payload.id),
      };
    case UPDATETASK:
      return {
        tasks: state.tasks.map(task =>
          task.id === data.payload.id
            ? { ...task, status: data.payload.status }
            : task
        )
      }
    default:
      return state;
  }
};

export default taskReducer;
