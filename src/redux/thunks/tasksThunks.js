import {
  createTaskAction,
  deleteTaskAction,
  loadTasksAction,
} from "../actions/actionsCreator";

export const loadTasksThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const tasks = await response.json();

  if (!response.ok) return;
  dispatch(loadTasksAction(tasks));
};

export const deleteTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${id}`, {
    method: "delete",
  });

  if (!response.ok) return;
  dispatch(deleteTaskAction(id));
};

export const createTaskThunk = (name) => async (dispatch) => {
  const task = { name, done: false };
  const taskJson = JSON.stringify(task);
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: "post",
    body: taskJson,
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) return;
  const taskWithId = await response.json();
  console.log(taskJson);
  dispatch(createTaskAction(taskWithId));
};
