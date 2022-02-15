import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTaskThunk } from "../../redux/thunks/tasksThunks";

const NewTask = () => {
  const dispatch = useDispatch();

  const blankData = { task: "" };

  const [formData, setFormdata] = useState(blankData);

  const updateForm = (event) => {
    setFormdata({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createTaskThunk(formData.task));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task"></label>
      <input
        id="task"
        type="text"
        onChange={updateForm}
        value={formData.task}
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default NewTask;
