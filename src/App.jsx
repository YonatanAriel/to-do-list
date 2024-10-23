import { useState } from "react";
import "./App.css";
import ListInput from "./list_input";
import Task from "./task";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="outer_container">
      <div className="container">
        <h1 style={{ display: "inline", textAlign: "center" }}>To-Do list</h1>
        <img src="/public/to-do.png" alt="" />
        <ListInput setTasks={setTasks} tasks={tasks} />
        <div className="tasks_container">
          {tasks?.map((task, i) => (
            <Task key={task + i} text={task} setTasks={setTasks} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
