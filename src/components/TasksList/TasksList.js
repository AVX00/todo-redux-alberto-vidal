import TaskElement from "../TaskElement/TaskElement";

const TasksList = ({ tasks }) => {
  return (
    <ul title="Tasks">
      {tasks && tasks.map((task) => <TaskElement key={task.id} task={task} />)}
    </ul>
  );
};
export default TasksList;
