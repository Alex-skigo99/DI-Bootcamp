import { configureStore, combineReducers } from "@reduxjs/toolkit";
import fetchReducer from "../features/fetch_data/fetchSlice";
import ageReducer from '../features/ageCounter/ageSlice';

export const rootReducer = combineReducers({
  fetchReducer,
  ageReducer
});

export default configureStore({
  reducer: {
    rootReducer
  },
});
