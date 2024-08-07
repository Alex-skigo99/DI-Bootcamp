import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "../features/fetch_data/fetchSlice";

export default configureStore({
  reducer: {
    fetchReducer,
  },
});
