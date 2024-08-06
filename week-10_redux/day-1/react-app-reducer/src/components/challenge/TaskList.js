import React, { createContext, useContext, useReducer, useState, useRef } from "react";
import { TaskContext, COMPLETE_TASK, REMOVE_TASK, EDIT_TASK } from "./TaskProvider";


function TaskList() {
    const { tasks, dispatch } = useContext(TaskContext);
    const newText = useRef();

    const handleCompleteTask = (id) => {
        dispatch({ type: COMPLETE_TASK, id });
    };

    const handleRemoveTask = (id) => {
        dispatch({ type: REMOVE_TASK, id });
    };

    const handleEditTask = (id) => {
        dispatch({ type: EDIT_TASK, payload: [id, newText.current.value] });
        newText.current.value = '';
    };

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleCompleteTask(task.id)}
                        />
                        {task.text}
                        <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
                        <input
                            type="text"
                            placeholder="Edit task..."
                            ref={newText}
                        />
                        <button onClick={() => handleEditTask(task.id)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;