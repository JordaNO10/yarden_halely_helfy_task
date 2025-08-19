import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import "./styles/App.css"
import { fetchTasks, createTask, updateTask, deleteTask, toggleTask } from "./services/appHelper";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  const handleAddTask = async (taskData) => {
    const created = await createTask(taskData);
    setTasks((prev) => [...prev, created]);
  };

  const handleUpdateTask = async (id, updatedData) => {
    const updated = await updateTask(id, updatedData);
    setTasks((prev) => prev.map((task) => (task.id === id ? updated : task)));
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleToggeledTask = async (id) => {
    const toggled = await toggleTask(id);
    setTasks((prev) => prev.map((task) => (task.id === id ? toggled : task)));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={handleAddTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
        onToggle={handleToggeledTask}
      />
    </div>
  );
}

export default App;
