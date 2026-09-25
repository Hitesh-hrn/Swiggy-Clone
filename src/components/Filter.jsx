import React from "react";

export default function Filters({ isAtTop }) {
    return (
        <div className="flex items-center gap-2 w-max flex-nowrap whitespace-nowrap">

            {/* Filter */}
            <div className="shrink-0 cursor-pointer rounded-full border border-[#ddd] bg-white px-3 py-2 text-[14px] shadow-sm flex items-center gap-2">
                <img
                    src="/Images/icons8-filter-30.png"
                    alt="Filter"
                    className="h-[16px] w-[16px] object-contain"
                />
                Filter
            </div>

            {/* Delivery Time */}
            <div className="shrink-0 cursor-pointer rounded-full border border-[#ddd] bg-white px-3 py-2 text-[14px] shadow-sm">
                Delivery Time
            </div>

            {/* 15 mins - Search aane par hide */}
            {!isAtTop && (
                <div className="shrink-0 cursor-pointer rounded-full border border-[#ddd] bg-white px-3 py-2 text-[14px] shadow-sm">
                    15 mins
                </div>
            )}

            {/* Offers */}
            <div className="shrink-0 cursor-pointer rounded-full border border-[#ddd] bg-white px-3 py-2 text-[14px] shadow-sm">
                Offers
            </div>

            {/* Ratings */}
            <div className="shrink-0 cursor-pointer rounded-full border border-[#ddd] bg-white px-3 py-2 text-[14px] shadow-sm">
                Ratings 4.0+
            </div>

            {/* Price */}
            <div className="shrink-0 cursor-pointer rounded-full border border-[#ddd] bg-white px-3 py-2 text-[14px] shadow-sm">
                Rs.300-Rs.600
            </div>

            {/* Less than */}
            {!isAtTop && (
            <div className="shrink-0 cursor-pointer rounded-full border border-[#ddd] bg-white px-3 py-2 text-[14px] shadow-sm">
                Less than Rs. 300
            </div>
            )}

            {/* Pure Veg */}
            <div className="shrink-0 cursor-pointer rounded-full border border-[#ddd] bg-white px-3 py-2 text-[14px] shadow-sm">
                Pure Veg
            </div>

            {/* Non Veg */}
            <div className="shrink-0 cursor-pointer rounded-full border border-[#ddd] bg-white px-3 py-2 text-[14px] shadow-sm">
                Non Veg
            </div>

            {/* Cuisines */}
                <div className="shrink-0 cursor-pointer rounded-full border border-[#ddd] bg-white px-3 py-2 text-[14px] shadow-sm">
                    Cuisines
                </div>

        </div>
    );
}