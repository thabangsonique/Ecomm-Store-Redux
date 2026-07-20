import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setPaymentMethod } from "../features/checkoutSlice";

export default function AddPayment() {
  const [payment, setPayment] = useState({
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    saveAsDefault: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // ..cardnumber formating
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    value = value.slice(0, 16);

    value = value.replace(/(\d{4})(?=\d)/g, "$1-");

    setPayment({
      ...payment,
      cardNumber: value,
    });
  };

  const handleDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 4);

    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }

    setPayment({
      ...payment,
      expiryDate: value,
    });
  };

  const handleCVC = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 3);

    setPayment({ ...payment, cvc: value });
  };

  //handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(payment);

    dispatch(setPaymentMethod(payment));
    localStorage.setItem("paymentMethod", JSON.stringify(payment));
    navigate("/save-payment");
  };

  return (
    <div className="flex justify-center min-h-screen py-17">
      {/* cards parent container */}
      <div>
        {/* card-1*/}
        <div className="w-[676px] bg-white rounded-[13px] p-6">
          <h1 className="uppercase tracking-[0.25em] text-[31.25px] mb-4">
            select a card
          </h1>
          <div className="flex space-x-[8px] mb-4">
            {/* icon */}
            <img src="/Card-2.svg" alt="Card" />
            <p className="text-xl font-regular text-tertiary">
              MasterCard ending in 4242
            </p>
          </div>
          <div className="flex space-x-[8px] mb-4">
            {/* icon */}
            <img src="/Card-2.svg" alt="Card" />
            <p className="text-xl font-regular text-tertiary">
              VISA Debit ending in 2894
            </p>
          </div>
        </div>

        {/* card-2 */}
        <div className="mt-[32px] rounded-[15px] bg-white w-[676px]  p-[32px]">
          <div className="p-2">
            <h1 className="uppercase tracking-[0.25em] text-[31.25px]">
              add new card
            </h1>
          </div>

          {/* form */}
          <form onSubmit={handleSubmit} className="mt-8">
            {/* name */}
            <div className="flex flex-col w-[612px] space-y-2 p-2">
              <label htmlFor="cardHolderName" className="text-dark/50">
                CardHolderName
              </label>
              <input
                id="cardHolderName"
                required
                type="text"
                value={payment.cardHolderName}
                onChange={(e) =>
                  setPayment({ ...payment, cardHolderName: e.target.value })
                }
                placeholder="John Maker"
                className="w-full  px-6 py-4 rounded-[13px] bg-white shadow-xl placeholder:text-xl placeholder:font-medium placeholder:text-dark/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
              />
            </div>

            {/* card-number */}
            <div className="flex flex-col w-[612px] mt-[16px] space-y-2  p-2">
              <label htmlFor="cardNumber" className="text-dark/50">
                Card Number
              </label>
              <div className="flex items-center w-full px-6 py-4  focus-within:ring-accent focus-within:ring-2 rounded-[13px] bg-white shadow-xl focus transition-all duration-300">
                {" "}
                <img src="/Card-2.svg" alt="Card" />
                <input
                  id="cardNumber"
                  required
                  value={payment.cardNumber}
                  onChange={handleCardNumberChange}
                  type="text"
                  placeholder="5126-5987-2214-7621"
                  className="w-full ml-[11.5px] placeholder:text-xl placeholder:font-medium placeholder:text-dark/50 focus:outline-none"
                />
              </div>
            </div>

            {/* date + CVC */}
            <div className=" mt-4">
              {/* input fields */}
              <div className="flex space-x-[32px]">
                {/* Expiry date */}
                <div>
                  <label htmlFor="ExpDate" className="text-dark/50">
                    Expiry Date
                  </label>
                  <div className="flex items-center space-x-2.5 py-4 px-6 bg-white rounded-[13px] shadow-xl focus-within:ring-2 focus-within:ring-accent transition-all duration-300">
                    <img src="/Calendar.svg" alt="Calendar" />
                    <input
                      id="ExpDate"
                      required
                      value={payment.expiryDate}
                      onChange={handleDateChange}
                      type="text"
                      placeholder="MM / YYYY"
                      className="placeholder:text-xl focus:outline-none"
                    />
                  </div>
                </div>

                {/* CVC */}
                <div>
                  {" "}
                  <label htmlFor="ExpDate" className="text-dark/50">
                    CVC
                  </label>
                  <div className="flex items-center py-4 px-6 w-[141px] bg-white rounded-[13px] shadow-xl focus-within:ring-2 focus-within:ring-accent transition-all duration-300">
                    <input
                      id="ExpDate"
                      required
                      value={payment.cvc}
                      onChange={handleCVC}
                      type="text"
                      placeholder="123"
                      className="w-full placeholder:text-xl focus:outline-none "
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* checkbox */}
            <div className="flex items-center mt-4 space-x-[8px] py-4 px-2">
              {/* box */}

              <input
                checked={payment.saveAsDefault}
                onChange={(e) =>
                  setPayment({ ...payment, saveAsDefault: e.target.checked })
                }
                type="checkbox"
                id="checkbox"
                className="sr-only"
              />

              <label
                htmlFor="checkbox"
                className="w-[16px] h-[16px] p-[2px] flex items-center justify-center border border-tertiary rounded-[2px] hover:cursor-pointer"
              >
                <div
                  className={`w-full h-full rounded-[2px] transition-colors duration-300 ${payment.saveAsDefault ? "bg-accent" : "bg-transparent"}`}
                />
              </label>

              {/* label text */}
              <label
                htmlFor="checkbox"
                className="text-xl text-dark/50 font-regular"
              >
                Save this as your default payment method
              </label>
            </div>

            {/* CTA payment button */}

            <button
              type="submit"
              className="flex w-full items-center justify-center mt-8 space-x-2 rounded-[10px] bg-black py-[8px] btn-hover"
            >
              <img src="/Card-3.svg" alt="Card" />
              <h2 className="text-xl font-medium text-white">
                Add Payment Method
              </h2>
            </button>

            {/* secure connection */}
            <div className="flex w-full mt-[32px] p-[5.5px] pl-6 items-center  justify-between">
              <a
                onClick={() => navigate("/checkout")}
                className="underline hover:cursor-pointer"
              >
                Back
              </a>

              {/* secure */}
              <div className="flex space-x-2">
                <div>
                  <img src="/secure.svg" alt="secure lock" />
                </div>

                <p className="text-base text-succes">Secure Connection</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
