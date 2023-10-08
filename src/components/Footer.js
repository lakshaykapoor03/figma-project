import React from "react";
import bgimg from "../assets/Vector 101.png"
import vector1 from "../assets/Vector 1.svg"
import rectangle from "../assets/Frame 1171276639.svg"

const Footer = () => {
  return (
  <div className="mt-24">
    <div className="z-10 relative">
     
     <div className=" flex flex-col justify-center items-center absolute left-96">
     <h1 className="text-center font-bold text-5xl pt-44 text-black">
       Let’s Talk About
     </h1>
     <h1 className="text-center font-bold text-5xl pt-5 ">MVP Care.
       <img className="ml-[5%] mt-2" src={vector1} alt="" />
     </h1>
     <div className="flex flex-col justify-center items-center">
       <input className="mt-10 hw-[50] md:w-[795px] -px] md:h-[80px] rounded-[50px] text-[20px] font-bold font-outfit text-black px-10" type="text" name="" id="" placeholder="First Name" />
       <div className="mt-10">
       <button className="w-[100px] h-[100px] text-5xl  rounded-full border-4 border-white mr-8 text-black"> {"<"}</button>
       <button className="w-[100px] h-[100px] text-5xl rounded-full border-4 border-white text-black">{">"}</button>
       </div>
     </div>
     </div>
     <div className="w-full h-[1px] bg-white absolute top-[750px] "></div>
    
     <div className="flex px-20 w-full justify-between mt-20 pb-20 absolute  top-[800px]">
   
       <div className="flex justify-around w-1/2 items-center ">
      
         <h2 className="text-4xl font-bold">MVP Care. </h2>
         <img src={rectangle} alt="" />
         <div className="flex justify-between w-64">
           <span>Privacy Policy</span>
           <span>|</span>
           <span>Terms & Condition</span>
         </div>
       </div>
       <div>
         <p>Copyright©2023. Created with love by MVP CARE</p>
       </div>
     </div>
   </div>
    <img src={bgimg} className=" w-[1629px] h-[1029px]" alt="" />
    
  </div>
  );
};

export default Footer;
