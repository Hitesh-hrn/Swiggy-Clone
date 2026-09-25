import React from "react";

function Explore() {
  return (
    <section className="mx-auto mt-[30px] mb-[20px] w-[80%]">
      <h2 className="mb-[25px] text-[28px] font-semibold">
        Explore Every Restaurants Near Me
      </h2>

      <div className="flex gap-[40px]">
        <div className="flex h-[70px] w-[300px] cursor-pointer items-center justify-center rounded-[14px] border border-[#ddd] text-[17px] font-semibold">
          Explore Restaurants Near Me
        </div>

        <div className="flex h-[70px] w-[300px] cursor-pointer items-center justify-center rounded-[14px] border border-[#ddd] text-center text-[17px] font-semibold">
          Explore Top Rated
          <br />
          Restaurants Near Me
        </div>
      </div>
    </section>
  );
}

export default Explore;