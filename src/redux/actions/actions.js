// src/redux/actions/actions.js
import { ADDTASK, DELETETASK } from "./actionTypes";

export const addTaskAction = () => ({
  type: ADDTASK,
});

export const deleteTaskAction = () => ({
  type: DELETETASK,
});
