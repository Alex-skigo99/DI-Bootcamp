import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        currentCategory: -1,
    },
    reducers: {
        addTask: (state, action) => {
            if (state.currentCategory == -1) return alert('Choose the category!');
            state.tasks.push({
                id: nanoid(),
                text: action.payload,
                active: true,
                category: state.currentCategory
            })
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((item) => item.id !== action.payload);
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload)
            task.active = !task.active;
        },
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        }
    }
});

export const {setCurrentCategory, addTask, removeTask, toggleTask} = tasksSlice.actions;
export default tasksSlice.reducer;
