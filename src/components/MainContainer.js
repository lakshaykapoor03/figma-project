import React from 'react'
import ipadPro from "../assets/iPad Pro.jpg"
import img1 from "../assets/Rectangle 423.png" 
import img2 from "../assets/Rectangle 424.png"
import img3 from "../assets/Rectangle 425.png"

const MainContainer = () => {
  return (
    <div className="mt-36 flex flex-col justify-center items-center">
        <h1 className="text-white  font-outfit text-3xl font-semibold  "> "Empowering Care with Tomorrow's Technology: <br /> 
        Seamless, Intuitive, Compassionate."</h1>
        <h2 className="font-[Pacifico] text-[#7A69FE]">"Advancing Care, Advancing Lives."</h2>
        <div className="flex justify-evenly w-full overflow-hidden">

            <img className="w-[222px] h-[290px] rounded-md object-cover mx-2" src={img1} alt="" />
            <img className="w-[222px] h-[280px] rounded-md object-cover mx-2" src={img2} alt="" />
            <img className="w-[222px] h-[280px] rounded-md object-cover mx-2" src={img3} alt="" />
            <img className="w-[222px] h-[280px] rounded-md object-cover mx-2" src={img3} alt="" />
            <img className="w-[222px] h-[280px] rounded-md object-cover mx-2" src={img3} alt="" />
            <img className="w-[222px] h-[280px] rounded-md object-cover mx-2" src={img3} alt="" />
            <img className="w-[222px] h-[280px] rounded-md object-cover mx-2" src={img3} alt="" />
            <img className="w-[222px] h-[280px] rounded-md object-cover mx-2" src={img3} alt="" />
        </div>
    </div>
  )
}

export default MainContainer