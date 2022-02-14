import { deleteTask, loadTasks } from "../actions/actionsCreator";

export const loadTasksThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const tasks = await response.json();

  if (!response.ok) return;
  dispatch(loadTasks(tasks));
};

export const deleteTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${id}`, {
    method: "delete",
  });

  if (!response.ok) return;
  dispatch(deleteTask(id));
};
