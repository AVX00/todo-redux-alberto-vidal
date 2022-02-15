const TaskElement = ({ task: { name }, actionOnClick }) => {
  const preventedActionOnClick = (event) => {
    event.preventDefault();
    actionOnClick();
  };

  return (
    <li onClick={preventedActionOnClick}>
      <p>{name}</p>
      <a href="deleteTask">X</a>
    </li>
  );
};
export default TaskElement;
