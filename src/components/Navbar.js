import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between m-8">
        <h1 className="font-outfit text-lg">MVP Care.</h1>
        <div className="flex justify-around w-1/3">
          <div className="text-gray-400 bg-slate-300 rounded-[50%] w-6 h-6"><i className="fa-solid fa-bell"></i></div>
          <button>5 Updates</button>
        
            <img src="" alt="" />
            <span>Maria Joseph</span>
  
        </div>
        
    </div>
  )
}

export default Navbar