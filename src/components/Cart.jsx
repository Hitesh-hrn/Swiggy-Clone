import React from "react";

export default function Cart() {
  return (
    <div className="invisible absolute right-0 top-full z-[9999] mt-3 w-[260px] rounded-lg border-t-2 border-[#FF5200] bg-white p-5 font-sans text-black opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">

      {/* Arrow */}
      <div className="absolute -top-[5px] right-8 h-3 w-3 rotate-45 border-l-[1.5px] border-t-[1.5px] border-[#FF5200] bg-white"></div>

      <h1 className="pb-3 text-[35px] font-semibold">
        Cart Empty
      </h1>

      <p className="pt-3 text-[20px] font-normal leading-6 text-[#777]">
        Your cart is waiting! Add some delicious food and enjoy your meal.
      </p>

    </div>
  );
}