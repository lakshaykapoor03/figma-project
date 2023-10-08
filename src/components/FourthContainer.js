import React from "react";
import screenshot from "../assets/Screenshot.png";
import ipadImg from "../assets/iPad Pro.jpg";
import vector1 from "../assets/Vector 1.svg"
import vector5 from "../assets/Vector 5.svg"

const FourthContainer = () => {
  return (
    <div className="bg-black py-20 mt-56">
      
      <h1 className="text-white text-center font-outfit text-5xl font-bold pb-20">
       <span className="text-purple-700"> Plan and</span> Organize Anything with Ai
       <img className="ml-[28%]" src={vector1} alt="" />
      </h1>
      <div className="ml-[45%] mb-20">
      <img className="" src={vector5} alt="" />
      </div>
      
      <div>
        <div className="flex justify-between overflow-hidden flex-wrap lg:flex-nowrap mt-30">
          <div className="">
            <img  className="w-[585px] h-[439px]" src={screenshot} alt="" />
            <div className="flex justify-between text-2xl  items-center w-[500px] mt-10">
              <span>Talk ith Chat bot</span>
              <button className="rounded-full border-2 p-2 border-gray-400 px-7 w-40 h-14  mr-14  text-xl font-semibold font-outfit">Lets Talk ^</button>
            </div>
          </div>
          <div className="mx-10">
            <img className="w-[585px] h-[439px] rounded-xl" src={ipadImg} alt="" />
            <div className="flex justify-between text-2xl  items-center w-[500px] mt-10">
              <span>Talk ith Chat bot</span>
              <button className="rounded-full border-2 p-2 border-gray-400 px-7 w-40 h-14  mr-14  text-xl font-semibold font-outfit">Lets Talk ^</button>
            </div>
          </div>
          <div  className="mx-10">
            <img  className="w-[585px] h-[439px] " src={screenshot} alt="" />
            <div className="flex justify-between text-2xl  items-center w-[500px] mt-10">
              <span>Talk ith Chat bot</span>
              <button className="rounded-full border-2 p-2 border-gray-400 px-7 w-40 h-14  mr-14  text-xl font-semibold font-outfit">Lets Talk ^</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthContainer;
