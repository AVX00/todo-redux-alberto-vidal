import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <TasksList tasks={tasks} />
    </>
  );
}

export default App;
