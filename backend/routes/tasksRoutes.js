const express = require("express");
const router = express.Router();


let currentId = 1;


// get all tasks
router.get("/api/tasks", (req, res) => {
  res.json(req.tasks);
});

// create new task 
router.post("/api/tasks", (req, res) => {
  const newTask = {
    id: currentId++,
    title: req.body.title,
    description: req.body.description,
    completed: false,
    createdAt: new Date(),
    priority: req.body.priority || "low",
  };
 // use the same array you defined in server.js
  req.tasks.push(newTask);  
  res.status(201).json(newTask);
});

// update task
router.put("/api/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
  const task = req.tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: `Task with the id: ${id} was not found` });
  task.title = req.body.title ?? task.title;
  task.description = req.body.description ?? task.description;
  task.completed = req.body.completed ?? task.completed;
  task.priority = req.body.priority ?? task.priority;

  res.json(task);
});

// delete task
router.delete("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = req.tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: `No task with the id ${id} was found` });
  }

  const updatedTasks = req.tasks.filter((t) => t.id !== id);
  req.setTasks(updatedTasks);   

  res.json({ message: `the task ${id} deleted successfully` });
});

// toggle status
router.patch("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const task = req.tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: `Task ${id} not found` });
  }

  if (typeof req.body.completed === "boolean") {
    task.completed = req.body.completed; // explicitly set true/false
  }

  res.json(task);
});

module.exports = router;