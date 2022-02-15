import { actionTypes } from "./actionsTypes";

export const loadTasks = (tasks) => ({
  type: actionTypes.loadTasks,
  tasks,
});

export const deleteTask = (id) => ({
  type: actionTypes.deleteTask,
  id,
});

export const createTask = (name) => ({
  type: actionTypes.createTask,
  task: { name, done: false },
});
