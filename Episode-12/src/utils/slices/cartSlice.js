import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items.pop();
    },

    clearCart: (state, action) => {
    
        console.log(state);
        console.log(current(state));
        state.items.length = 0;
        console.log(current(state));
    
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
