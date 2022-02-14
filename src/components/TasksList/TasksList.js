import TaskElement from "../TaskElement/TaskElement";

const TasksList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskElement task={task} />
            ))}
        </ul>
    );
};
export default TasksList;
