import React from 'react'
import boosto from "../assets/boosto.png"
import vector7 from  "../assets/Vector 7.svg"
import bgimg from "../assets/Group.svg"
import vector1 from "../assets/Vector 1 purple.svg"



const FifthContainer = () => {
  return (
    <div>
         <div>
        <div className="bg-white text-black pt-20 ">
        <div className="flex justify-evenly w-[60vw] mx-auto">
       
       <div>
       <h1 className="  text-black text-center font-outfit text-5xl font-bold ">Aspects of </h1>
        <h1 className="  text-black text-center font-outfit text-5xl font-bold mt-6 mr-10 ">the App  <img className="ml-[25%]  w-[150px]" src={vector1} alt="" /></h1>
        {/* <p className="text-xl text-gray-500 mt-2 pl-6">Create a Email efficiently and quickly.</p> */}
       </div>
       <div className="flex mt-10"> <img src={vector7} alt="" />
        <img className="mt-16" src={bgimg} alt="" /></div>
        <button className=" mt-24 bg-black px-7 w-48 h-14 text-white rounded-full text-xl font-semibold    ">
            Get Started <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      <div className="flex flex-col justify-center items-center mt-24">
      
     
         
      
        
       
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