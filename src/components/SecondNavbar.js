import React from "react";
import { useState } from "react";
import Popover from "./Popover";

const SecondNavbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const[showHighlight, setShowHighlight] = useState(false)

  return (
    <div className=" bg-black text-white">
      <div className="  bg-black text-white flex flex-col md:flex-row flex-wrap pt-8 pb-2 justify-center md:justify-evenly list-none items-center text-sm cursor-pointer">
        <li
          // onMouseLeave={() => setShowPopup(false)}
          onMouseEnter={() => setShowPopup(true)}
        >
          Quick Action{" "}
          <i className="fa-solid fa-chevron-down text-[8px] py-4 md:py-0"></i>
        </li>
        <li>
          Business Operations{" "}
          <i className="fa-solid fa-chevron-down text-[8px] py-4 md:py-0"></i>
        </li>
        <li>
          Care Planning{" "}
          <i className="fa-solid fa-chevron-down text-[8px] py-4 md:py-0"></i>
        </li>
        <li>
          Human Resources{" "}
          <i className="fa-solid fa-chevron-down text-[8px] py-4 md:py-0"></i>
        </li>
        <li className="py-4 md:py-0">Training</li>
        <li className=" py-4 md:py-0">Profile</li>
      </div>
     <div className="flex justify-around ml-16 w-[95vw]">
     <div className="w-28 h-[1px] bg-purple-700 hover:bg-purple-700 "></div>
      <div className="w-28 h-[1px] bg-purple-700 hover:bg-purple-700 "></div>
      <div className="w-28 h-[1px] bg-purple-700 hover:bg-purple-700 "></div>
      <div className="w-28 h-[1px] bg-purple-700 hover:bg-purple-700 "></div>
      <div className="w-28 h-[1px] bg-purple-700 hover:bg-purple-700 "></div>
      <div className="w-28 h-[1px] bg-purple-700 hover:bg-purple-700 "></div>

     </div>

      <div className="w-full h-[1px] bg-gray-700"></div>
      {showPopup && (
        <div className="p-4 mx-20">
          <Popover />
        </div>
      )}
    </div>
  );
};

export default SecondNavbar;
