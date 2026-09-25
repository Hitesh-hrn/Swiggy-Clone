import React, { useEffect, useRef, useState } from "react";
import { RxCaretDown } from "react-icons/rx";

export default function SortBy() {
    const [sortOpen, setSortOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState("relevance");

    const sortRef = useRef(null);

    const options = [
        { value: "relevance", label: "Relevance" },
        { value: "delivery", label: "Delivery Time" },
        { value: "rating", label: "Rating" },
        { value: "low", label: "Cost: Low to High" },
        { value: "high", label: "Cost: High to Low" },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sortRef.current &&
                !sortRef.current.contains(event.target)
            ) {
                setSortOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    return (
        <div ref={sortRef} className="relative w-fit shrink-0">

            {/* Sort By Button */}
            <div
                onClick={() => setSortOpen(!sortOpen)}
                className="flex w-fit cursor-pointer items-center gap-2 rounded-full border border-[#ddd] bg-white px-3 py-2 shadow-sm whitespace-nowrap"
            >
                Sort By
                <RxCaretDown className="text-[20px]" />
            </div>

            {/* Dropdown */}
            {sortOpen && (
                <div className="absolute left-0 top-[55px] z-[1000] w-[270px] rounded-2xl border border-[#ddd] bg-white p-4 shadow-lg">

                    <div className="mb-2 text-[17px] font-semibold">
                        Sort By
                    </div>

                    {options.map((option) => {
                        const selected =
                            selectedSort === option.value;

                        return (
                            <div
                                key={option.value}
                                onClick={() =>
                                    setSelectedSort(option.value)
                                }
                                className="flex items-center justify-between px-3 py-2 mb-1 rounded-lg cursor-pointer"
                            >
                                <span className="text-[15px] whitespace-nowrap">
                                    {option.label}
                                </span>

                                <div
                                    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                                        selected
                                            ? "border-[#fc8019]"
                                            : "border-[#999]"
                                    }`}
                                >
                                    {selected && (
                                        <div className="h-2.5 w-2.5 rounded-full bg-[#fc8019]"></div>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                    <div className="mt-2 border-t border-[#eee] pt-2 text-center">
                        <span
                            onClick={() => setSortOpen(false)}
                            className="cursor-pointer text-[15px] font-semibold text-[#fc8019]"
                        >
                            Apply
                        </span>
                    </div>

                </div>
            )}
        </div>
    );
}