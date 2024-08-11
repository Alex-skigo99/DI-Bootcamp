import { configureStore, combineReducers } from "@reduxjs/toolkit";
import fetchReducer from "../features/posts/fetchSlice";
import userReducer from '../features/users/userSlice';
import bookReducer from '../features/ex-XP_book-inventory/booksSlice';
import taskReducer from '../features/DC_productivity/tasksSlice';
import categoryReducer from '../features/DC_productivity/categoriesSlice';

export const rootReducer = combineReducers({
  fetchReducer,
  userReducer,
  bookReducer,
  taskReducer,
  categoryReducer
});

export default configureStore({
  reducer: rootReducer
});
