const TaskElement = ({ task }) => {
  return (
    <li>
      <p>{task.name}</p>
      <a href="deleteTask">X</a>
    </li>
  );
};
export default TaskElement;
