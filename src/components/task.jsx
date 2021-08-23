import React from "react";
import { FaTimes } from "react-icons/fa";
function Task({ task, onDelete, onToggle }) {
  console.log(task);
  return (
    <div
      className={`task-Track ${task.reminder ? "reminder-Track" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
