import TaskItem from "./TaskItem.jsx";

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return <p style={{ textAlign: "center", color: "#777", marginTop: "20px" }}>No tasks yet!</p>;
  }

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;

