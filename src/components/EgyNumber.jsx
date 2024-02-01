import React from "react";
import egy from "../assets/images/egy.svg";
import { RiArrowDropDownLine } from "react-icons/ri";

const EgyNumber = () => {
  return (
    <div className=" flex flex-col gap-2 w-full ">
      <label htmlFor="">Phone Number*</label>
      <div className=" flex items-center w-full bg-gray-100 px-2 py-1 rounded-lg border border-[#cacaca] ">
        <div className=" flex item-center cursor-pointer">
          <img src={egy} alt="egy" />
      
            <RiArrowDropDownLine className="text-3xl" />
    
        </div>
        <input type="text" placeholder="+2(100) 123-34567" className="bg-gray-100 w-full outline-none" />
      </div>
    </div>
  );
};

export default EgyNumber;
