import { actionTypes } from "./actionsTypes";

export const loadTasksAction = (tasks) => ({
  type: actionTypes.loadTasks,
  tasks,
});

export const deleteTaskAction = (id) => ({
  type: actionTypes.deleteTask,
  id,
});

export const createTaskAction = (name) => ({
  type: actionTypes.createTask,
  task: { name, done: false },
});
