import React, { useState } from "react";

const TaskForm = ({ onSubmit, initialData = {} }) => {
  // local state for the form fields
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [priority, setPriority] = useState(initialData.priority || "low");

  // handle the form submit (add or update)
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, priority });
    // reset form after submit
    setTitle("");
    setDescription("");
    setPriority("low");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      {/* shows different text if editing or adding */}
      <button type="submit">{initialData.id ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
