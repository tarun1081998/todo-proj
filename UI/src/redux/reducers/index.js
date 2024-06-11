// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import taskReducer from './tasksReducer';
// Import your individual reducers here
// import someReducer from './someReducer';

const rootReducer = combineReducers({
  // Add your individual reducers here
  // someReducer: someReducer
    tasks: taskReducer
});

export default rootReducer;
