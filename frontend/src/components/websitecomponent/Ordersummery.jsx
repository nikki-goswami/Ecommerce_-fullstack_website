'use client'

import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { formatIndianCurrency } from '@/helper/helper'


export default function Ordersummery() {
     const cart = useSelector((store) => store.cart)
  return (
  <div className=' border-2 p-3 w-2xs  ml-6 md:ml-28 mt-8'>
        <h3 className='text-xl font-medium mb-4'>Order Summary</h3>

       
        
        
         <div>
        <div className='flex justify-between border-b-[1px] my-3'>
            <h4>Ori-Total:</h4>
            <h5 className='font-medium'>{formatIndianCurrency(cart?.original_total)}</h5>

        </div>
        <div className='flex justify-between border-b-[1px] my-3'>
            <h4>Saving:</h4>
            <h5 className='font-medium'>{formatIndianCurrency((cart.original_total)-(cart.final_total))}</h5>

        </div>
        
         <div className='flex justify-between  my-5'>
            <h4 className='font-medium '>Order total:</h4>
            <h5 className='font-medium'>{formatIndianCurrency(cart.final_total)}</h5>

        </div>
        </div>

      
<div className=' flex justify-center items-center '>
  <Link href="/cheakout">
      <button className=' bg-teal-600 text-white text-xl px-3 py-2 rounded-xl'>Cheackout</button>
  </Link>

</div>

</div>


  )
}


