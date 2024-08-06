import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/basic-todo-list/tasksSlice";
import plannerReducer from "../features/planner/plannerSlice" 

export default configureStore({
  reducer: {
    tasksReducer,
    plannerReducer
  },
});
