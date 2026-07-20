import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingAddress: {
    fullname: "",
    street: "",
    city: "",
    province: "",
    country: "",
    saveAssDefault: false,
  },

  paymentMethod: {
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    saveAssDefault: false,
  },
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
