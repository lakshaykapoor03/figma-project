import React from 'react'
import img61 from "../assets/Rectangle 61.png"

const Navbar = () => {
  return (
<>
<div className="flex flex-wrap justify-between items-center bg-black text-white p-8">
        <h1 className="font-outfit text-[25px] font-bold">MVP Care.</h1>
        <div className="flex justify-around items-center w-1/3">
          <div className= " hidden  md:block text-gray-400 bg-slate-300 rounded-[50%] w-12 h-12 md:relative"><i className="fa-solid fa-bell absolute top-3 left-4 text-lg"></i></div>
          <button className="hidden md:block md:p-2 w-24 h-11 backdrop-blur-lg border-gray-400 bg-gradient-to-r from-slate-600 to-gray-400 rounded-md text-xs md:text-sm">5 Updates</button>
        
            <div className="flex items-center bg-white w-40 h-12 rounded-md">
            <img className="w-11 h-11" src={img61} alt="" />
            <span className="bg-white text-black rounded-md text-sm md:text-md px-3">Maria Joseph</span>
            </div>
  
        </div>
        
    </div>
    <div className="w-full h-[1px] bg-gray-700">

    </div>
</>
  )
}

export default Navbar