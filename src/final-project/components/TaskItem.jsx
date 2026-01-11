function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li>
      <span
        className={task.completed ? "completed" : ""}
        onClick={() => toggleTask(task.id)}
      >
        {task.name}
      </span>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}

export default TaskItem;


