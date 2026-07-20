import { createSlice } from "@reduxjs/toolkit";

const defaultCart = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const savedCart = JSON.parse(localStorage.getItem("cart"));
const initialState = savedCart || defaultCart;

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

      //save updated cart state inside local storage.
      localStorage.setItem("cart", JSON.stringify(state));
    },

    //increase quantity.
    increament(state, action) {
      const id = action.payload;
      const product = state.products.find((item) => item.id === id);

      if (product) {
        product.quantity++;
        state.totalQuantity++;
        state.totalPrice += product.price;
        state.totalPrice = Number(state.totalPrice.toFixed(2));
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    //decrease quantity.
    decreament(state, action) {
      console.log("decreament fired!");
      const id = action.payload;
      const product = state.products.find((item) => item.id === id);

      if (product.quantity === 1) {
        state.products = state.products.filter((item) => item.id !== id);
      } else {
        product.quantity--;
      }

      state.totalQuantity--;
      state.totalPrice -= product.price;
      state.totalPrice = Number(state.totalPrice.toFixed(2));

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, increament, decreament } = cartSlice.actions;
export default cartSlice.reducer;
