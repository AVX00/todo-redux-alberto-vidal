import { actionTypes } from "./actionsTypes";

export const loadTasks = (tasks) => ({
  type: actionTypes.loadTasks,
  tasks,
});

export const deleteTask = (id) => ({
  type: actionTypes.deleteTask,
  id,
});
