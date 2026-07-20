import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setShippingAddress } from "../features/checkoutSlice.jsx";
import { useDispatch } from "react-redux";

export default function AddAddress() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [shipping, setShipping] = useState({
    fullname: "",
    street: "",
    city: "",
    province: "",
    country: "",
    saveAssDefault: false,
  });

  //submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(shipping);
    dispatch(setShippingAddress(shipping));

    //save address data to local storage
    localStorage.setItem("shippingAddress", JSON.stringify(shipping));

    navigate("/save-address");
  };

  return (
    <div className="flex items-center justify-center min-h-screen border border-black py-[95px]">
      {/* card form */}
      {/* shiping name */}

      <div className="bg-white p-8 w-[676px] rounded-[15px]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="shippingName" className="text-base text-dark/50">
              Shipping Name
            </label>
            <input
              id="shippingName"
              required
              value={shipping.fullname}
              onChange={(e) =>
                setShipping({ ...shipping, fullname: e.target.value })
              }
              type="text"
              placeholder="John Maker"
              className="w-full bg-white rounded-[13px] py-4 px-6 text-xl focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-xl placeholder:font-medium shadow-lg transition-colors duration-300"
            />
          </div>
          {/* street name */}

          <div className="flex flex-col space-y-2">
            <label htmlFor="shippingName" className="text-base text-dark/50">
              Street Name
            </label>
            <input
              id="shippingName"
              required
              value={shipping.street}
              onChange={(e) =>
                setShipping({ ...shipping, street: e.target.value })
              }
              type="text"
              placeholder="123 Plae Grond Street"
              className="w-full bg-white rounded-[13px] py-4 px-6 text-xl focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-xl placeholder:font-medium shadow-lg transition-colors duration-300"
            />
          </div>

          {/* city */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="shippingName" className="text-base text-dark/50">
              City
            </label>
            <input
              id="shippingName"
              required
              value={shipping.city}
              onChange={(e) =>
                setShipping({ ...shipping, city: e.target.value })
              }
              type="text"
              placeholder="Vermont"
              className="w-full bg-white rounded-[13px] py-4 px-6 text-xl focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-xl placeholder:font-medium shadow-lg transition-colors duration-300"
            />
          </div>

          {/* province */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="shippingName" className="text-base text-dark/50">
              State / Province
            </label>
            <input
              id="shippingName"
              required
              value={shipping.province}
              onChange={(e) =>
                setShipping({ ...shipping, province: e.target.value })
              }
              type="text"
              placeholder="California"
              className="w-full bg-white rounded-[13px] py-4 px-6 text-xl focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-xl placeholder:font-medium shadow-lg transition-colors duration-300"
            />
          </div>

          {/* country */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="shippingName" className="text-base text-dark/50">
              Country
            </label>
            <input
              id="shippingName"
              required
              value={shipping.country}
              onChange={(e) =>
                setShipping({ ...shipping, country: e.target.value })
              }
              type="text"
              placeholder="United States of America"
              className="w-full bg-white rounded-[13px] py-4 px-6 text-xl focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-xl placeholder:font-medium shadow-lg transition-colors duration-300"
            />
          </div>

          {/* checkbox */}
          <div className="flex items-center mt-4 space-x-[8px] py-4 px-2">
            {/* box */}

            <input
              checked={shipping.saveAssDefault}
              onChange={(e) =>
                setShipping({ ...shipping, saveAssDefault: e.target.checked })
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
                className={`w-full h-full rounded-[2px] transition-colors duration-300 ${shipping.saveAssDefault ? "bg-accent" : "bg-transparent"}`}
              />
            </label>

            {/* label text */}
            <label
              htmlFor="checkbox"
              className="text-xl font-regular text-dark/50"
            >
              Save this as your default payment method
            </label>
          </div>

          {/* CTA button */}

          <button
            onClick={() => navigate("/save-address")}
            type="submit"
            className="flex w-full items-center justify-center mt-8 space-x-2 rounded-[10px] bg-black py-[8px] btn-hover"
          >
            <h2 className="text-xl font-medium text-white">Add Address</h2>
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
  );
}
