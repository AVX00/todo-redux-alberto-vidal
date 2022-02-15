import { useState } from "react";

const NewTask = () => {
  const blankData = { task: "" };

  const [formData, setFormdata] = useState(blankData);

  const updateForm = (event) => {
    setFormdata({ ...formData, [event.target.id]: event.target.value });
  };

  return (
    <form>
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
