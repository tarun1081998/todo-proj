// src/redux/actions/actions.js
import { ADDTASK, DELETETASK } from "./actionTypes";

export const addTaskAction = (data) => ({
  type: ADDTASK,
  payload: data
});

export const deleteTaskAction = (id) => ({
  type: DELETETASK,
  payload: {id:id}
});
