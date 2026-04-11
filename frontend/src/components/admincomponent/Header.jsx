import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";



export default function AdminHeader() {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
      {/* Left - Logo / Title */}
     
       <div className="relative w-80">
      
      {/* Icon */}
      <CiSearch 
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl"
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  


      {/* Right - User Info */}
      <div className="flex items-center gap-4">
        <div className="text-right relative">
          {/* <p className="text-sm font-medium text-gray-800">Admin</p> */}
          <FaRegBell className=' w-[18px] h-[18px]'/>
          <div className="w-[6] h-[6] rounded-full bg-amber-600 absolute bottom-4  right-0"></div>


          
        </div>

        <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-semibold">
          R
        </div>
        <div className="">
          <h2 className=' font-bold'>Robert</h2>
          <h5>Admin</h5>
        </div>
      </div>

    </header>
  )
}
