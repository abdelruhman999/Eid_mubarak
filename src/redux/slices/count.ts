import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface textType {
 
  text: string | null; 
}
const initialState: textType = {
  text: null
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    addText: (state) => {
      state.text = state.text; 
    },
      setaddText: (state , action:PayloadAction<string | null>) => {
      state.text = action.payload;   
    },
  },
});

export const {addText, setaddText } = textSlice.actions;

export default textSlice.reducer;
