import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './slices/dataSlice';
import countReducer from './slices/count';
export const store = configureStore({
  reducer: {
    data: dataReducer,
    count: countReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
