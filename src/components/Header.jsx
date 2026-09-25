import React, { useState, useEffect } from "react";
import { PiCaretDownBold } from "react-icons/pi"
import { AiOutlineSearch } from "react-icons/ai";
import { TbRosetteDiscount } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import Location from "./Location";
import Profile from "./Profile";
import Cart from "./Cart";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };
  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  const links = [
    {
      icon: <FiBriefcase />,
      name: "Swiggy Corporate",
    },
    {
      icon: <AiOutlineSearch />,
      name: "Search",
    },
    {
      icon: <TbRosetteDiscount />,
      name: "Offers",
      sup: "New",
    },
    {
      icon: <FiHelpCircle />,
      name: "Help",
    },
    {
      icon: <FiUser />,
      name: "Hitesh",
    },
    {
      icon: <span className="relative text-[#686b78]">
        <svg viewBox="-1 0 37 32" className="h-5 w-5 fill-white stroke-current stroke-[1.5]">
          <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z" />
        </svg>
        <b className="absolute inset-0 flex items-center justify-center text-[10px]">0</b>
      </span>,
      name: "Cart",
    },
  ];

  return (
    <>
      {/* Header */}
      <header className=" top-0 z-[999] bg-white p-[15px] text-[#686b78] shadow-xl">
        <div className="mx-auto flex max-w-[1200px] items-center">

          {/* Logo */}
          <div className="h-[45px] w-[45px] overflow-hidden rounded-[12px] mr-3">
            <img
              src="/Images/swig-logo.jpeg"
              className="w-full"
              alt="logo"
            />
          </div>

          {/* Location */}
          <div className="ml-5">
            <span
              className="font-bold cursor-pointer group"
              onClick={showSideMenu}
            >
              <span className="text-black underline decoration-[3px] underline-offset-4 group-hover:text-[#FF5200] group-hover:decoration-[#FF5200]">
                Complex
              </span>
              <span className="ml-2 mr-1">
                Khelgaon, Jharkhand, India
              </span>

              <PiCaretDownBold
                fontSize={20}
                className="ml-2 inline text-[#FF5200]"
              />
            </span>
          </div>

          {/* Navigation */}
          <nav className="ml-auto hidden list-none gap-8  text-[18px] font-semibold min-[1200px]:flex">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className=" group relative flex items-center gap-2 hover:text-[#FF5200]"
                >
                  {link.icon}
                  {link.name}
                  <sup className="text-yellow-500">{link.sup}</sup>
                  
                   {link.name === "Hitesh" && <Profile />}
                   {link.name === "Cart" && <Cart />}
                </li>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Location Sidebar */}
      {toggle && (
        <Location closeLocation={hideSideMenu} />
      )}
    </>
  );
}