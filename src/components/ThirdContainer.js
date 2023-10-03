import React from 'react'
import rectangle433 from "../assets/Rectangle 433.jpg"

const ThirdContainer = () => {
  return (
    <div>
        <div className="bg-white text-black pt-20">
        <h1 className="text-black text-center font-outfit text-4xl font-bold  ">Explore Our <br /> Ease  Features</h1>

      <div className="flex justify-evenly mt-24">
      <div>
          <img className="w-[466px] h-[640px]" src={rectangle433} alt="" />
        </div>
        <div className="list-none mt-28">
          <h3 className="text-xl font-bold">Composing Emails</h3>
          <li className="mt-4 font-semibold text-gray-600">Crafting Policies</li>
          <li className="mt-4 font-semibold text-gray-600">Creating Documents</li>
          <li className="mt-4 font-semibold text-gray-600">Locating Saved Documents</li>

          <h4 className="mt-56 font-semibold text-black ">
          View and create care profiles
          </h4>
      
          <button className=" mt-4 bg-black text-white px-4 py-2 rounded-3xl text-md font-bold    ">
            Get Started <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
     
      </div>
    </div>
    </div>
  )
}

export default ThirdContainer