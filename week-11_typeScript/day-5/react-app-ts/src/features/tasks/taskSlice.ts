import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { ItemType } from "../../model/listItems";
import { RootState } from "../../app/store";

export type InitialStateType = {
    tasks: ItemType[]
};

const initialState: InitialStateType = {
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
            if (task == undefined) return;
            task.active = !task.active;
        }
    }
});

export const {addTask, removeTask, toggleTask} = tasksSlice.actions;
export const useTasksNumber = () => useSelector((state: RootState) => state.taskReducer.tasks.length);
export const useTasks = () => useSelector((state: RootState) => state.taskReducer.tasks);

export default tasksSlice.reducer;