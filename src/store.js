import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import checkoutSlice from "./features/checkoutSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    checkout: checkoutSlice,
  },
});
