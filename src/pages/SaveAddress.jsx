import React from "react";
import { CircleCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SaveAddress() {
  const navigate = useNavigate();
  return (
    <div className="text-black min-h-screen flex  items-center justify-center">
      <div className="bg-white flex flex-col items-center p-[32px] space-y-6 shadow-lg rounded-2xl">
        {/* icon */}

        <CircleCheck className="text-green-600 h-20 w-20" />
        <h1 className="text-3xl font-bold">Address saved successfully!</h1>

        {/* cta button */}
        <button
          onClick={() => navigate("/checkout")}
          className="flex w-[580px] items-center justify-center mt-8 space-x-2 rounded-[10px] text-white font-medium text-xl bg-black py-[8px] btn-hover"
        >
          {" "}
          Back to Checkout
        </button>
      </div>
    </div>
  );
}
