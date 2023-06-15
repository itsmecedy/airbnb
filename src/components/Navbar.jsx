import React from "react";
import Logo from "../assets/Airbnb-logo.png";
import { FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FiGlobe, FiMenu } from "react-icons/fi";
function Navbar() {
  return (
    <div className="h-[80px] border-b ">
      <div className=" max-w-[1740px] mx-auto h-full  flex justify-between items-center ">
        {/* left side */}
        <div href="/" className="md:w-[340px] ">
          <img className="h-16 cursor-pointer " src={Logo} alt="logo" />
        </div>
        {/* middle */}
        <div className="flex items-center rounded-full border py-2 pl-4 pr-2 shadow-md cursor-pointer ">
          <div className="">
            <span className=" px-2 font-semibold">Anywhere</span>
            <span className=" px-2 font-semibold border-l border-r">
              Any week
            </span>
            <span className=" px-2 text-gray-400 ">Add guests</span>
          </div>
          <div className=" rounded-full text-white bg-[#FF385C] flex items-center p-2">
            <FaSearch />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center">
          <div className=" py-2 px-4 hover:bg-gray-200 rounded-full font-semibold cursor-pointer">
            Airbnb your home
          </div>
          <div className=" p-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <FiGlobe className=" text-xl  " />
          </div>
          <div className="flex items-center border-2 rounded-full p-3 gap-2 hover:shadow-md cursor-pointer">
            <FiMenu className=" text-2xl" />
            <div className=" p-1 bg-gray-500 text-white text-2xl rounded-full ">
              <BsFillPersonFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
