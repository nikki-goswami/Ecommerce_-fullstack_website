import React from 'react'
import { SlArrowDown } from "react-icons/sl";


export default function Topheader() {
  return (
    <div className="bg-gray-100 text-sm w-full hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex gap-4 text-gray-600">
            <span>Hotline 24/7</span>
            <span className="font-medium">(025) 3886 25 16</span>
          </div>

          <div className="flex gap-6 items-center text-gray-600">
            <span>Sell on Swoo</span>
            <span>Order Tracking</span>
            <div className="flex items-center gap-1"><span>USD</span>
            <span className='pt-2'><SlArrowDown /> </span></div>
            <div className="flex items-center gap-1"><span>Eng</span>
            <span className='pt-3'><SlArrowDown /> </span></div>
            
          </div>
        </div>
      </div>

  )
}
