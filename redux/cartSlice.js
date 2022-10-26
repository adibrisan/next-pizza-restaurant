import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "pizzaCart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity++;
      state.total += action.payload.price * action.payload.quantity;
    },
    resetCart: (state) => {
      state = initialState;
    },
  },
});

export const { addProduct, resetCart } = cartSlice.actions;
export default cartSlice;
