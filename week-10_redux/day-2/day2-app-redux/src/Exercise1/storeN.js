import { configureStore } from "@reduxjs/toolkit";

import { taskReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    taskReducer,
  },
});

// export default store;
