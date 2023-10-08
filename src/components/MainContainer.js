import React from 'react'
import ipadPro from "../assets/iPad Pro.jpg"
import img1 from "../assets/Rectangle 423.png" 
import img2 from "../assets/Rectangle 424.png"
import img3 from "../assets/Rectangle 425.png"

const MainContainer = () => {
  return (
    <div className="pt-36 flex flex-col justify-center items-center bg-black text-white">
        <h1 className="text-white text-center font-outfit h-[114px] text-[40px] font-semibold -my-10  md:my-10"> "Empowering Care with Tomorrow's Technology: <br /> 
        Seamless, Intuitive, Compassionate."</h1>
        <h2 className="font-[Pacifico] text-[#7A69FE] h-[50px]  my-14 md:my-10 text-center text-[35px]">"Advancing Care, Advancing Lives."</h2>
        <div className="flex md:flex-wrap justify-evenly mt-12">

            <div>
            <img className="w-[222px] h-[290px] rounded-md object-cover mx-4" src={img1} alt="" />
            <p className="text-white text-center mt-4 mb-20"  >Planning</p>
            </div>
            <div>
            <img className="w-[222px] h-[280px] rounded-md object-cover mx-4" src={img2} alt="" />
            <p className="text-white text-center mt-4 mb-20" >Business Operations </p>
            </div>
            <div>
            <img className="w-[222px] h-[280px] rounded-md object-cover mx-4" src={img3} alt="" />
            <p className="text-white text-center mt-4 mb-20" >Nutritions</p>
            </div> <div>
            <img className="w-[222px] h-[280px] rounded-md object-cover mx-4" src={img2} alt="" />
            <p className="text-white text-center mt-4 mb-20" >HR</p>
            </div>
            <div>
            <img className="w-[222px] h-[280px] rounded-md object-cover mx-4" src={img3} alt="" />
            <p className="text-white text-center mt-4 mb-20" >Policies</p>
            </div> <div>
            <img className="w-[222px] h-[280px] rounded-md object-cover mx-4" src={img2} alt="" />
            <p className="text-white text-center mt-4 mb-20" >Hello</p>
         
            </div> 
            <div>
            <img className="w-[222px] h-[280px] rounded-md object-cover mx-4" src={img2} alt="" />
            <p className="text-white text-center mt-4 mb-20" >Hello</p>
            </div>
            <div>
            <img className="w-[222px] h-[280px] rounded-md object-cover mx-4" src={img2} alt="" />
            <p className="text-white text-center mt-4 mb-20" >Hello</p>
            </div> 
        </div>
    </div>
  )
}

export default MainContainer