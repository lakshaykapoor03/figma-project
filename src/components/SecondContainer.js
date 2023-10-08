import React from "react";
import contImg from "../assets/Rectangle yellow.png";
import lineImg from  "../assets/Group 1171276045.svg"
import vector1 from "../assets/Vector 1 purple.svg"

const SecondContainer = ({abc}) => {
  return (
    <div className="bg-white text-black pt-20  px-32">
      <div className="flex justify-between">
        <div>
        <h2 className="text-5xl font-bold ml-4">Our Expertise</h2>
        <img className="px-28  w-[410px]" src={vector1} alt="" />
        </div>
        <button className="border-black border-2 border-solid px-7 w-40 h-14  mr-14 rounded-full text-xl font-semibold font-outfit    ">
          View All <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
      <div className="flex flex-wrap justify-evenly mt-24">
        <div>
          <img className="mr-4" src={lineImg} alt="" />
        </div>
        <div className="list-none mt-6">
          <h3 className="text-3xl font-bold">Care Planning</h3>
          <li className="mt-4 text-2xl font-semibold text-gray-600">Reports</li>
          <li className="mt-4 text-2xl font-semibold text-gray-600">Meal Planning</li>
          <li className="mt-4 text-2xl font-semibold text-gray-600">Staff Training</li>

          <div className="mr-20">
          <h4 className="mt-48  font-bold text-xl text-black ">
            Unlock Insights, Empower Growth:
          </h4>
          <p className="mt-4 text-xl text-gray-600 w-80">
            Harness the power of data with our analysis section.
          </p>
          <button className=" mt-4 bg-black px-7 w-48 h-14 text-white rounded-full text-xl font-semibold    ">
            Get Started <i className="fa-solid fa-arrow-up"></i>
          </button>
          </div>
        </div>
        <div>
          <img className="w-[814px] h-[556px]" src={contImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SecondContainer;
