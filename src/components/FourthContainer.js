import React from "react";
import screenshot from "../assets/Screenshot.png";
import ipadImg from "../assets/iPad Pro.jpg";

const FourthContainer = () => {
  return (
    <div className="bg-black pt-20">
      <h1 className="text-white text-center font-outfit text-4xl font-bold">
        Plan and Organize Anything with Ai
      </h1>
      <div>
        <div className="flex mt-30">
          <div className="mx-20">
            <img  className="w-[585px] h-[439px]" src={screenshot} alt="" />
            <div className="flex justify-between w-[400px]">
              <span>Talk ith Chat bot</span>
              <button>Lets Talk ^</button>
            </div>
          </div>
          <div className="mx-10">
            <img className="w-[585px] h-[439px] rounded-xl" src={ipadImg} alt="" />
            <div className="flex justify-between w-[400px]">
              <span>Talk ith Chat bot</span>
              <button>Lets Talk ^</button>
            </div>
          </div>
          <div  className="mx-10">
            <img  className="w-[585px] h-[439px]" src={screenshot} alt="" />
            <div className="flex justify-between w-[400px]">
              <span>Talk ith Chat bot</span>
              <button>Lets Talk ^</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthContainer;
