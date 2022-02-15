import TaskElement from "../TaskElement/TaskElement";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  & li {
    background-color: #00a1c4;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;

    & p {
      padding: 0;
      margin-left: 10px;
    }

    & a {
      margin: 10px;
      width: 20px;
      height: 20px;
      background-color: #892222;
      border-radius: 50%;
      color: #f0f0f0;
      text-align: center;
      text-decoration: none;
      font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
        Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }
`;

const TasksList = ({ tasks }) => {
  return (
    <List title="Tasks">
      {tasks && tasks.map((task) => <TaskElement key={task.id} task={task} />)}
    </List>
  );
};
export default TasksList;
