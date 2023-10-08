import React from 'react'
import rectangle433 from "../assets/Rectangle 433.jpg"
import vector4 from "../assets/Vector 4.svg"
import vector1 from "../assets/Vector 1 purple.svg"
import lineImg from  "../assets/Group 1171276045.svg"
import vector3 from "../assets/Vector 3.png"



const ThirdContainer = () => {
  return (
    <div className="">
        <div className="bg-white text-black pt-20 ">
        <h1 className=" relative text-black text-center font-outfit text-5xl font-bold ">Explore Our </h1>
        <h1 className=" relative text-black text-center font-outfit text-5xl font-bold mt-6 "><img className="absolute left-[38%]" src={vector4} alt="" /> <span className="font-normal">Ease</span>  Features  <img className="ml-[48%]  w-[150px]" src={vector1} alt="" /></h1>

      <div className="flex justify-evenly mt-24">
      <div>
          <img className="w-[466px] h-[650px]" src={rectangle433} alt="" />
        </div>
        <div className="flex flex-wrap justify-evenly mt-24">
        <div>
          <img className="mr-4" src={lineImg} alt="" />
        </div>
        <div className="list-none mt-6">
          <h3 className="text-3xl font-bold">Composing Emails</h3>
          <li className="mt-4 text-2xl font-semibold text-gray-600">Crafting Policies</li>
          <li className="mt-4 text-2xl font-semibold text-gray-600">Creating Documents</li>
          <li className="mt-4 text-2xl font-semibold text-gray-600">Locating Saved Documents</li>


          <div className="mr-20 mt-36">
          <div className="w-[83px] my-10  p-[0.2px] bg-black"></div>
           
          <h4 className="  font-bold mb-3 text-xl text-black ">
          View and create care profiles
          </h4>
      
          <button className=" mt-4 bg-black px-7 w-48 h-14 text-white rounded-full text-xl font-semibold    ">
            Get Started <i className="fa-solid fa-arrow-up"></i>
          </button>
          </div>
        </div>
      
      </div>
     
      </div>
      <div className="">
        <img src={vector3} className="absolute left-60 -z-10" alt="" />
      </div>
    </div>
    </div>
  )
}

export default ThirdContainer