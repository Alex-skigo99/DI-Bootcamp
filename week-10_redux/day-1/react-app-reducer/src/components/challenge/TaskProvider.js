import React, { createContext, useReducer } from "react";

// Context for managing tasks
export const TaskContext = createContext();

// Actions
export const ADD_TASK = "ADD_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const FILTER_TASKS = "FILTER_TASKS";
export const EDIT_TASK = "EDIT_TASK";

// Reducer function
function taskReducer(state, action) {
    switch (action.type) {
        case ADD_TASK:
            const newTask = { id: Date.now(), text: action.text, completed: false };
            return [...state, newTask];
        case COMPLETE_TASK:
            return state.map((task) =>
                task.id === action.id ? { ...task, completed: true } : task
            );
        case EDIT_TASK:
            console.log(action);
            return state.map((task) =>
                task.id === action.payload[0] ? { ...task, text: action.payload[1] } : task
            );

        case REMOVE_TASK:
            return state.filter((task) => task.id !== action.id);
        default:
            return state;
    }
}

export function TaskProvider({ children }) {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}
