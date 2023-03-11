import React, { useState } from "react";
import "./styles.css";

let id = 0;
let INIT = [
  { id: id++, item: "Buy a flat" },
  { id: id++, item: "Buy a car" },
  { id: id++, item: "Find a job" },
];

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(INIT);

  const addNewTask = (e) => {
    e.preventDefault();
    setTasks(tasks.concat({ id: id, item: newTask }));
    setNewTask("");
  };

  return (
    <div className="App">
      <h2>To Do App</h2>
      <div>
        <input
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          type="text"
          placeholder="Add new task"
        />
        <button onClick={addNewTask}>Add</button>
      </div>
      <div>
        <ul>
          {tasks.map(({ id, item }) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
