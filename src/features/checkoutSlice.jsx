import { createSlice } from "@reduxjs/toolkit";

const defaultAddress = {
  fullname: "John Maker",
  street: "123 Plae Grond Street",
  city: "Vermont",
  province: "California",
  country: "United States of America",
  saveAsDefault: true,
};

const defaultCardPayment = {
  cardNumber: "1252",
};

//check if theres any address saved.
const savedAddress = JSON.parse(localStorage.getItem("shippingAddress"));
const savedPayment = JSON.parse(localStorage.getItem("paymentMethod"));

const initialState = {
  shippingAddress: savedAddress || defaultAddress,

  paymentMethod: savedPayment || defaultCardPayment,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    //save/set the payment method.
    setPaymentMethod(state, action) {
      state.paymentMethod = action.payload;
    },

    //save shipping address.
    setShippingAddress(state, action) {
      state.shippingAddress = action.payload;
    },
  },
});

export const { setPaymentMethod, setShippingAddress } = checkoutSlice.actions;
export default checkoutSlice.reducer;
