import React, { useContext, useState } from "react";
import { TaskContext, ADD_TASK } from "./TaskProvider";

function TaskAdder() {
    const { dispatch } = useContext(TaskContext);
    const [taskText, setTaskText] = useState("");
  
    const handleAddTask = () => {
      if (taskText.trim() === "") return;
      dispatch({ type: ADD_TASK, text: taskText });
      setTaskText("");
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    );
  }

export default TaskAdder;