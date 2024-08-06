import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    currentDate: '2024-08-06',
    tasks: [],
};

const plannerSlice = createSlice({
    name: 'planner',
    initialState,
    reducers:{
        addTask: (state, action) => {
            state.tasks.push({
                id: nanoid(),
                text: action.payload[1],
                date: action.payload[0],
                active: true
            })
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((item) => item.id !== action.payload);
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload)
            task.active = !task.active;
        },
        setCurrentDate: (state, action) => {
            state.currentDate = action.payload;
        },
        editTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload[0])
            task.text = action.payload[1];
        }
    }
});

export const {addTask, removeTask, toggleTask, setCurrentDate, editTask} = plannerSlice.actions;

export default plannerSlice.reducer;