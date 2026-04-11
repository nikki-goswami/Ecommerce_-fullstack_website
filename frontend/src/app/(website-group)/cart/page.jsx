import CartItem from '@/components/websitecomponent/CartItem'
import Ordersummery from '@/components/websitecomponent/Ordersummery'
import Link from 'next/link'
import React from 'react'

export default function Cartpage() {
  return (
    <div className='w-full '>
    <div className=' max-w-7xl mx-auto p-4  bg-gray-50'>
    <div className=" bg-white  px-6 py-5 rounded-xl mb-3">
      <div className="flex items-center text-sm text-gray-500 gap-2">

        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>

        <span>/</span>

        <Link href="/pages" className="hover:text-gray-700">
          pages
        </Link>

        <span>/</span>

        <span className="text-black font-medium">
          Cart
        </span>

      </div>
    </div>

    <div className=' grid grid-cols-1 md:grid-cols-2 items-center relative'>
      <div > 

      
     
     <CartItem/>







    

       </div> 


<Ordersummery/>
    </div>
    </div>
    </div>
  )
}
