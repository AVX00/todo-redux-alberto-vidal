import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TasksList from "./components/TasksList/TasksList";
import { loadTasksThunk } from "./redux/thunks/tasksThunks";

function App() {
  const tasks = useSelector((state) => state.tasksList);
  const dispatch = useDispatch();
  dispatch(loadTasksThunk);
  return (
    <>
      <TasksList tasks={tasks} />
    </>
  );
}

export default App;
