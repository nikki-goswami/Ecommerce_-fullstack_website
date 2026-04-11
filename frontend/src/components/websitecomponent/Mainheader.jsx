import React from 'react'
import { SlArrowDown } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";


export default function Mainheader() {
  return (
     <div className="bg-teal-500 w-full ">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-6  ">
          <div className="bg-white rounded-full flex items-center w-full max-w-xl overflow-hidden sm:ml-6">
            <button className="px-4 text-sm text-gray-600 font-bold">
              All Categories 
            </button>
            <SlArrowDown className='w-[12px] h-[12px] font-medium mt-1' />
            <input
              type="text"
              placeholder="Search anything..."
              className="flex-1 px-4 py-2 outline-none text-sm"
            />
            <button className="px-6 ">
              <CiSearch />

            </button>
          </div>

          <div className="hidden md:flex gap-8 text-white text-xs font-medium">
            <span>FREE SHIPPING OVER $199</span>
            <span>30 DAYS MONEY BACK</span>
            <span>100% SECURE PAYMENT</span>
          </div>
        </div>
      </div>
  )
}
