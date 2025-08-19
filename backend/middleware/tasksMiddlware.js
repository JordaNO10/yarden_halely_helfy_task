// Temp tesks for later usage
let tasks = [
  {
    id: 1,
    title: "Homework",
    description: "Given homework from Monday",
    completed: false,
    createdAt: new Date(),
    priority: "low",
  },
  {
    id: 2,
    title: "Fix the sink",
    description: "Buy a plug to fix the sink",
    completed: false,
    createdAt: new Date(),
    priority: "medium",
  },
  {
    id: 3,
    title: "Walkie Doggie",
    description: "Take Lichi on a walk",
    completed: false,
    createdAt: new Date(),
    priority: "high",
  },
  {
    id: 4,
    title: "go to the gym",
    description: "Go to holmesPlace",
    completed: false,
    createdAt: new Date(),
    priority: "high",
  },
];

// middleware to share the tasks array across routes
const tasksMiddleware = (req, res, next) => {
  // make tasks available on the request
  req.tasks = tasks;                   
   // helper to update the tasks array
  req.setTasks = (newTasks) => {      
    tasks = newTasks;
  };
   // move on to the next middleware/route
  next();
};
module.exports = tasksMiddleware;