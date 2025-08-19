import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "../styles/TaskList.css";
const TaskItem = ({ task, onUpdate, onDelete, onToggle }) => {
  const [editing, setEditing] = useState(false);

  const handleEditSubmit = (data) => {
    onUpdate(task.id, data);
    setEditing(false);
  };

  return (
    <div className="task-card">
      {editing ? (
        <TaskForm initialData={task} onSubmit={handleEditSubmit} />
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>
            Priority:{" "}
              <span className={`priority-${task.priority}`}>
                                        {task.priority}
              </span>
         </p>
          <p>Status: {task.completed ? "Done" : "Work in progress"}</p>
          <div className="task-buttons">
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={() => onToggle(task.id)}>
            {task.completed ? "Undo" : "Finish"}
          </button>
          </div>
        </>
      )}
    </div>
  );
};
export default TaskItem;
