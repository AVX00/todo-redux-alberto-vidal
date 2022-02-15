import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewTask from "./components/NewTask/NewTask";
import TasksList from "./components/TasksList/TasksList";
import { loadTasksThunk } from "./redux/thunks/tasksThunks";

function App() {
  const tasks = useSelector((state) => state.tasksList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTasksThunk);
  }, [dispatch]);
  return (
    <>
      <NewTask />
      <TasksList tasks={tasks} />
    </>
  );
}

export default App;
