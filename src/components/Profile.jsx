import React from "react";

export default function Profile() {
  return (
    <div className="invisible absolute right-0 top-full z-[9999] mt-3 w-[170px] rounded-lg border-t-2 border-[#FF5200] bg-white p-3 text-center text-[#555] opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">

      {/* Arrow */}
    <div className="absolute -top-[5px] right-8 h-3 w-3 rotate-45 border-l-[1.5px] border-t-[1.5px] border-[#FF5200] bg-white"></div>

      <p className="relative cursor-pointer py-1 text-[14px] hover:text-black">
        Profile
      </p>

      <p className="relative cursor-pointer py-1 text-[14px] hover:text-black">
        Orders
      </p>

      <p className="relative cursor-pointer py-1 text-[14px] hover:text-black">
        Swiggy One
      </p>

      <p className="relative cursor-pointer py-1 text-[14px] hover:text-black">
        Favourates
      </p>

      <p className="relative cursor-pointer py-1 text-[14px] hover:text-black">
        Logout
      </p>

    </div>
  );
}