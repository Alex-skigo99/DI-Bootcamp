import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/basic-todo-list/tasksSlice";

export default configureStore({
  reducer: {
    tasksReducer
  },
});
