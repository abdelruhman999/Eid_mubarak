import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// تعريف نوع البيانات
interface CounterState {
  value: number;
}

// الحالة الأولية
const initialState: CounterState = {
  value: 0,
};

// إنشاء Slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// تصدير الـ Actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// تصدير Reducer
export default counterSlice.reducer;
