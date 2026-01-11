import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // all | active | completed

  function addTask(name) {
    setTasks([
      ...tasks,
      { id: Date.now(), name, completed: false }
    ]);
  }

  function toggleTask(id) {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  // Filtered tasks based on selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // all
  });

  return (
    <div>
      <Header />
      <TaskInput addTask={addTask} />

      {/* Filter Buttons */}
      <div style={{ marginTop: "15px", textAlign: "center" }}>
        <button onClick={() => setFilter("all")} style={{ marginRight: "5px" }}>All</button>
        <button onClick={() => setFilter("active")} style={{ marginRight: "5px" }}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
      <Footer
        total={tasks.length}
        completed={tasks.filter(task => task.completed).length}
      />
    </div>
  );
}

export default App;
