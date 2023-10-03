import React from 'react'
import boosto from "../assets/boosto.png"

const FifthContainer = () => {
  return (
    <div>
         <div>
        <div className="bg-white text-black pt-20">
        <h1 className="text-black text-center font-outfit text-4xl font-bold  ">Aspects of  <br /> the App</h1>

      <div className="flex flex-col justify-center items-center mt-24">
      
     
         
      
          <button className=" mt-4 bg-black text-white px-4 py-2 rounded-3xl text-md font-bold    ">
            Get Started <i className="fa-solid fa-arrow-up"></i>
          </button>
       
        <div>
          <img className="w-[912px] h-[574px]" src={boosto} alt="" />
        </div>
     
      </div>
    </div>
    </div>
    </div>
  )
}

export default FifthContainer