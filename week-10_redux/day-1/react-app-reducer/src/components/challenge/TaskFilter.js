import React, { useContext, useState } from "react";
import { TaskContext, FILTER_TASKS } from "./TaskProvider";

function TaskFilter() {
    const { tasks, dispatch } = useContext(TaskContext);
  
    const handleFilterTask = (mode) => {
      dispatch({ type: FILTER_TASKS, mode });
    };
  
    return (
      <div>
        <button onClick={handleFilterTask('all')}>All</button>
        <button onClick={handleFilterTask('completed')}>Completed</button>
        <button onClick={handleFilterTask('active')}>Active</button>
      </div>
    );
  }

export default TaskFilter;