import { useRef } from "react";
import styles from "./list_input.style.module.css";

function ListInput({ tasks, setTasks }) {
  const inputRef = useRef(null);

  const addTask = () => {
    const task = inputRef.current.value;
    const ISALREADYEXIST = tasks.includes(task);
    const ISEMPTY = task.trim().length === 0;
    if (ISALREADYEXIST || ISEMPTY) return;

    setTasks((prev) => (prev ? [...prev, task] : [task]));
    inputRef.current.value = "";
  };
  return (
    <div className={styles.input_container}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Add your text"
        onKeyDown={(e) => {
          if (e.key === "Enter") addTask();
        }}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default ListInput;
