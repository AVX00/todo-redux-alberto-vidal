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
    setFormdata(blankData);
  };

  const isFilled = formData.task !== "";

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">New Task</label>
      <input
        id="task"
        type="text"
        onChange={updateForm}
        value={formData.task}
      />
      <button type="submit" disabled={!isFilled}>
        Create Task
      </button>
    </form>
  );
};

export default NewTask;
