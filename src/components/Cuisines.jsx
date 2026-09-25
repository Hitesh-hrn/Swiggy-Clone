import React from "react";

function Cuisine() {
  const cuisines = [
    "Chinese Restaurant Near Me",
    "South Indian Restaurant Near Me",
    "Indian Restaurant Near Me",
    "Kerala Restaurant Near Me",
    "Korean Restaurant Near Me",
    "North Indian Restaurant Near Me",
    "Seafood Restaurant Near Me",
    "Bengali Restaurant Near Me",
    "Punjabi Restaurant Near Me",
    "Italian Restaurant Near Me",
    "Andhra Restaurant Near Me",
  ];

  return (
    <section className="mx-auto my-[50px] w-[80%]">
      <h2 className="mb-[25px] text-[28px] font-semibold">
        Best Cuisines Near Me
      </h2>

      <div className="grid grid-cols-4 gap-[40px]">
        {cuisines.map((item, index) => (
          <div
            key={index}
            className="flex h-[65px] cursor-pointer items-center justify-center rounded-[14px] border border-[#ddd] bg-white text-center text-[17px] font-semibold"
          >
            {item}
          </div>
        ))}

        <div className="flex h-[65px] cursor-pointer items-center justify-center rounded-[14px] border border-[#ddd] text-[17px] font-semibold text-[#ff5200]">
          Show More ⌄
        </div>
      </div>
    </section>
  );
}

export default Cuisine;