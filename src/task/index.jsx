import { useState } from "react";
import styles from "./style.module.css";
import { FiX } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

function Task({ text, setTasks }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const deleteTask = () =>
    setTasks((prev) => prev.filter((task) => task !== text));

  return (
    <div
      className={styles.task_container}
      style={{ color: isCompleted ? "lightgray" : "black" }}
    >
      <button onClick={() => setIsCompleted((prev) => !prev)}>
        {isCompleted ? (
          <FaRegCheckCircle color="orange" />
        ) : (
          <FaRegCircle color="lightgray" />
        )}
      </button>
      <span style={{ textDecoration: isCompleted && "line-through" }}>
        {text}
      </span>
      <button onClick={deleteTask}>
        <FiX />
      </button>
    </div>
  );
}
export default Task;
