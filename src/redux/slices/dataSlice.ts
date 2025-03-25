import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clear } from "console";

interface DataState {
  items: any[]; 
}

const initialState: DataState = {
  items: [], 
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<any[]>) => {
      state.items = [...state.items, ...action.payload]; 
    },
    clearItems: (state) => {
      state.items = []; 
    }
  },
});

export const { addItems } = dataSlice.actions;

export default dataSlice.reducer;
