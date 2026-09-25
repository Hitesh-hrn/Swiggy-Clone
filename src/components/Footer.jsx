import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-0 bg-[#f1f1f6] pb-[30px]">

      {/* Top Line */}
      <div className="mx-auto w-[92%] border-t-2 border-[#222] shadow-[0_-3px_8px_rgba(0,0,0,0.12)]"></div>

      {/* App Download Section */}
      <div className="flex items-center justify-center gap-[30px] py-[30px]">
        <h2 className="whitespace-nowrap text-[22px] font-semibold">
          For better experience, download the Swiggy app now
        </h2>

        <div className="flex items-center gap-[12px]">
          <img
            src="/Images/play_store.png"
            alt="Google Play"
            className="h-[55px] w-[170px] cursor-pointer object-contain"
          />

          <img
            src="/Images/app_store.png"
            alt="App Store"
            className="h-[55px] w-[170px] cursor-pointer object-contain"
          />
        </div>
      </div>

      {/* Footer Content */}
      <div className="ml-[18%] my-[35px] grid w-[80%] grid-cols-[1.3fr_1fr_1fr_1fr_1fr] px-8">

        {/* Logo */}
        <div>
          <img
            src="/Images/swiggy_logo.png"
            alt="Swiggy Logo"
            className="h-[55px] w-auto object-contain"
          />

          <p className="mt-[12px] text-[15px] text-[#555]">
            © 2026 Swiggy Limited
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-[15px] text-[17px] font-bold">
            Company
          </h3>

          <div className="space-y-[7px] text-[15px] text-[#555]">
            <p>About Us</p>
            <p>Swiggy Corporate</p>
            <p>Careers</p>
            <p>Team</p>
            <p>Swiggy One</p>
            <p>Swiggy Instamart</p>
            <p>Swiggy Dineout</p>
          </div>
        </div>

        {/* Contact & Legal */}
        <div>
          <h3 className="mb-[15px] text-[17px] font-bold">
            Contact us
          </h3>

          <div className="space-y-[7px] text-[15px] text-[#555]">
            <p>Help & Support</p>
            <p>Partner with us</p>
            <p>Ride with us</p>
          </div>

          <h3 className="mb-[15px] mt-[30px] text-[17px] font-bold">
            Legal
          </h3>

          <div className="space-y-[7px] text-[15px] text-[#555]">
            <p>Terms & Conditions</p>
            <p>Cookie Policy</p>
            <p>Privacy Policy</p>
            <p>Investor Relations</p>
          </div>
        </div>

        {/* Available In */}
        <div>
          <h3 className="mb-[15px] text-[17px] font-bold">
            Available in:
          </h3>

          <div className="space-y-[7px] text-[15px] text-[#555]">
            <p>Bangalore</p>
            <p>Gurgaon</p>
            <p>Hyderabad</p>
            <p>Delhi</p>
            <p>Mumbai</p>
            <p>Pune</p>
          </div>

          <select className="mt-[12px] rounded-[8px] border border-[#ccc] bg-transparent px-[15px] py-[7px] text-[13px] outline-none">
            <option>679 cities</option>
          </select>
        </div>

        {/* Life at Swiggy */}
        <div>
          <h3 className="mb-[15px] text-[17px] font-bold">
            Life at Swiggy
          </h3>

          <div className="space-y-[7px] text-[15px] text-[#555]">
            <p>Explore with Swiggy</p>
            <p>Swiggy News</p>
            <p>Snackables</p>
          </div>

          {/* Social Links */}
          <h3 className="mb-[15px] mt-[30px] text-[15px] font-bold">
            Social Links
          </h3>

          <div className="flex gap-[15px] text-[17px]">
            <FaLinkedinIn className="cursor-pointer text-[#333]" />
            <FaInstagram className="cursor-pointer text-[#333]" />
            <FaFacebookF className="cursor-pointer text-[#333]" />
            <FaPinterestP className="cursor-pointer text-[#333]" />
            <FaTwitter className="cursor-pointer text-[#333]" />
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;