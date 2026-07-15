import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //add to cart
    //remove from cart
    //clear cart
  },
});

export default cartSlice.reducer;
