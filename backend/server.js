const express = require("express")
const cors = require("cors");

const app = express()
// IMPORTANT IMPORTS !
const taskRoutes = require("./routes/tasksRoutes")
const taskMiddleware = require("./middleware/tasksMiddlware"); 

const PORT = 4000;

// Middleware usage
app.use(cors());
app.use(express.json())
app.use(taskMiddleware);

// Routes usage
app.use(taskRoutes);

app.get("/", (req, res) => {
  res.send(" Task Manager running.");
});

app.listen(PORT,()=>
{
    console.log(`server is running at`,PORT);
    
})