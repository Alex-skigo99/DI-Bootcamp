import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        addTask: (state, action) => {
            state.tasks.push({
                id: nanoid(),
                text: action.payload,
                active: true
            })
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((item) => item.id !== action.payload);
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload)
            task.active = !task.active;
        }
    }
});

export const {addTask, removeTask, toggleTask} = tasksSlice.actions;

export default tasksSlice.reducer;