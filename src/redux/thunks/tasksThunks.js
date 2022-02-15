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
  const action = createTaskAction(name);
  const { task } = action;
  const taskJson = JSON.stringify(task);
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: "post",
    json: taskJson,
  });

  if (!response.ok) return;
  dispatch(action);
};
