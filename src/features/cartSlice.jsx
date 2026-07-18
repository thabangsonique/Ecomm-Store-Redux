import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //add to cart.
    addToCart(state, action) {
      const newItem = action.payload;
      const ItemExist = state.products.find((item) => item.id === newItem.id);

      if (ItemExist) {
        ItemExist.quantity++;
        ItemExist.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: 1, //created
        });
      }

      //update global state.
      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
