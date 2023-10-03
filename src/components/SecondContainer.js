import React from "react";
import contImg from "../assets/Rectangle yellow.png";

const SecondContainer = () => {
  return (
    <div className="bg-white text-black pt-20">
      <div className="flex justify-between mx-10  ">
        <h2 className="text-4xl font-bold">Our Expertise</h2>
        <button className="border-black border-2 border-solid px-4 rounded-3xl text-xs font-bold    ">
          View All <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
      <div className="flex justify-evenly mt-24">
        <div className="list-none mt-8">
          <h3 className="text-xl font-bold">Care Planning</h3>
          <li className="mt-4 font-semibold text-gray-600">Reports</li>
          <li className="mt-4 font-semibold text-gray-600">Meal Planning</li>
          <li className="mt-4 font-semibold text-gray-600">Staff Training</li>

          <h4 className="mt-48 font-semibold text-black ">
            Unlock Insights, Empower Growth:
          </h4>
          <p className="mt-4 font-semibold text-gray-600">
            Harness the power of data with our analysis section.
          </p>
          <button className=" mt-4 bg-black text-white px-4 py-2 rounded-3xl text-md font-bold    ">
            Get Started <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
        <div>
          <img className="w-[814px] h-[556px]" src={contImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SecondContainer;
