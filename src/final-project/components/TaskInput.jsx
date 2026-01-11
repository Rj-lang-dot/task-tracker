import { useState } from "react";

function TaskInput({ addTask }) {
  const [task, setTask] = useState("");

  function handleAdd() {
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default TaskInput;
