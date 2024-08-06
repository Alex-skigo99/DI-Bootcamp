import { v4 as uuid4 } from "uuid";
import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from "./actions";

export const initialState = {
    tasks: [],
};

export const taskReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case ADD_TASK:
            const newTasks = [...state.tasks];
            newTasks.push({ id: uuid4(), text: action.text, active: true });
            return { ...state, tasks: newTasks };

        case REMOVE_TASK:
            const notDeletedTask = state.tasks.filter((item) => item.id !== action.id);
            return { ...state, tasks: notDeletedTask };

        case TOGGLE_TASK:
            const updatedTask = state.tasks.map((item) => item.id === action.id ? { ...item, active: false } : item);
            return { ...state, tasks: updatedTask };

        default:
            return state;
    }
};