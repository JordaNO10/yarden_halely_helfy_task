# Task Manager App

*Built with React + Node.js + Express.js*

---



**Task Manager App**
 Built with React + Node.js + Express.js

##Setup & Installation##

**Prerequisites**

* Node.js + npm
* React 18
* Git

**Clone & Root**

```bash
git clone https://github.com/YOUR_USERNAME/firstname_lastname_helfy_task.git
cd firstname_lastname_helfy_task
```

**Backend**

```bash
cd backend
npm install
npm start
```

Runs on: `http://localhost:4000`

**Frontend**

```bash
cd frontend
npm install
npm start
```

Runs on: `http://localhost:3000`

---

## Features

* ➕ Add Task (title, description, priority)
* ✏️ Edit Task (inline)
* 🗑️ Delete Task (with confirmation)
* ✅ Toggle Completion
* 🔍 Filter: All / Completed / Pending
* 🎡 Endless Carousel (smooth loop)
* 🏷️ Priority badges: low / medium / high
* 📱 Responsive CSS (no frameworks)

---

##  Architecture

**Frontend (React)**

* `App` — container & state
* `TaskList` — carousel / list view
* `TaskItem` — single task actions
* `TaskForm` — add / edit form
* `TaskFilter` — status filtering

**Backend (Express)**

* `routes/tasksRoutes.js` — REST endpoints
* `middleware/tasksMiddleware.js` — in-memory store
* `server.js` — app & CORS, runs on 4000
---
```
task-manager/
├── backend/
│   ├── routes/
│   │   └── tasksRoutes.js       # API endpoints
│   ├── middleware/
│   │   └── tasksMiddleware.js   # In-memory task store
│   ├── CRUD.js                  # CRUD helpers
│   ├── server.js                # Express app entry (runs on port 4000)
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.js
│   │   │   ├── TaskList.js
│   │   │   ├── TaskItem.js
│   │   │   ├── TaskForm.js
│   │   │   └── TaskFilter.js
│   │   ├── styles/
│   │   │   ├── App.css
│   │   │   └── TaskList.css
│   │   └── appHelper.js
│   ├── public/
│   ├── package.json
│
├── .gitignore
└── README.md
```

##  Data Model

```ts
interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  priority: 'low' | 'medium' | 'high';
}
```

**Notes**

* IDs are auto-incremented (1+)
* In-memory only (per requirements)

---

##  API Endpoints

**Tasks**

* `GET /api/tasks` — list
* `POST /api/tasks` — create
* `PUT /api/tasks/:id` — update
* `DELETE /api/tasks/:id` — delete
* `PATCH /api/tasks/:id/toggle` — toggle completed

**Create Body**

```json
{
  "title": "string",
  "description": "string",
  "priority": "low | medium | high"
}
```

---

##  UX & Styling

* Regular CSS only (no frameworks)
* Mobile-first, responsive layout
* Visual priority badges (green / amber / red)
* Hover states & smooth transitions
* Empty-state for carousel (no tasks)

---

##  My Approach

* Backend first: REST routes + middleware store
* Frontend next: components & hooks (`useState`, `useEffect`)
* HTTP via fetch/axios
* Kept code simple, readable, commented where needed
* Focused on required features before polish

---


##  Repo & Submission

* Public repo name: `firstname_lastname_helfy_task`
* Contains: backend/, frontend/, .gitignore, README.md
* Optional: /screenshots with app images

**Run**

```bash
# backend
cd backend && npm start # http://localhost:4000
# frontend
cd frontend && npm start # http://localhost:3000
```

---

##  Dependencies
📦 **Backend Dependencies**

express – server וה API בניית

cors – frontend קריאה מה

nodemon – auto-reload שרת

📦 **Frontend Dependencies**

axios – Backend -ל Http קריאות

react-slick – הקרוסלה שמציגה את המשימות

slick-carousel – קבצי CSS ותמיכה עבור הקרוסלה

##  Notes & Assumptions

* No DB by design (assignment requirement)
* Proper HTTP codes & basic validation
* Toggle endpoint kept per spec; could be `PATCH /:id` with body in strict REST
* Carousel implemented with React logic; fallback message on empty list


