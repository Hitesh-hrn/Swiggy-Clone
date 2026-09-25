import React from "react";

export default function Location({ closeLocation }) {
  return (
    <div className="fixed inset-0 z-[99999]">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={closeLocation}
      ></div>

      {/* Sidebar */}
      <div className="absolute left-0 top-0 h-full w-[450px] overflow-y-auto bg-white p-[30px] shadow-xl">

        {/* Close Button */}
        <div
          onClick={closeLocation}
          className="mb-[30px] cursor-pointer text-[32px] text-[#333]"
        >
          ×
        </div>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search for area, street name..."
          className="box-border h-[55px] w-full border border-[#ddd] px-[15px] text-[15px] outline-none shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
        />

        {/* Current Location */}
        <div className="mt-[25px] flex items-center gap-[18px] border-b border-[#eee] px-[10px] py-[20px]">
          <div className="text-[28px] text-[#fc8019]">
            ◎
          </div>

          <div>
            <h3 className="m-0 text-[16px] text-[#333]">
              Get current location
            </h3>

            <p className="mb-0 mt-[6px] text-[13px] text-[#999]">
              Using GPS
            </p>
          </div>
        </div>

        {/* Saved Addresses */}
        <div className="mt-[30px]">

          <p className="mb-[20px] text-[12px] font-semibold text-[#999]">
            SAVED ADDRESSES
          </p>

          {/* Home */}
          <div className="flex gap-[18px] border-b border-dashed border-[#ddd] py-[18px]">
            <div className="text-[24px] text-[#555]">
              ⌂
            </div>

            <div>
              <h3 className="mb-[8px] mt-0 text-[16px] text-[#333]">
                Home
              </h3>

              <p className="m-0 text-[13px] leading-[1.5] text-[#777]">
                1, Indian Institute of Information Technology,
                Ranchi, Jharkhand 835217, India
              </p>
            </div>
          </div>

          {/* Work */}
          <div className="flex gap-[18px] border-b border-dashed border-[#ddd] py-[18px]">
            <div className="text-[24px] text-[#555]">
              ▣
            </div>

            <div>
              <h3 className="mb-[8px] mt-0 text-[16px] text-[#333]">
                Work
              </h3>

              <p className="m-0 text-[13px] leading-[1.5] text-[#777]">
                Main Road, Indian Institute of Information
                Technology, Ranchi, Jharkhand 835217, India
              </p>
            </div>
          </div>

          {/* View More */}
          <div className="mt-[25px] cursor-pointer text-[13px] font-bold text-[#4f85d9]">
            VIEW MORE
          </div>

        </div>
      </div>
    </div>
  );
}