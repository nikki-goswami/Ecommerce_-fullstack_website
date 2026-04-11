
'use client'
import React from 'react'
import { useSelector, useDispatch  } from 'react-redux'
 import { axiosbaseURL, formatIndianCurrency } from '@/helper/helper'
 import { deleteCart } from '@/redux/reducers/cartReducers';


export default function CartItem() {
   const dispacher= useDispatch();


  const cart = useSelector((store) => store.cart)






 
  return (
    <>
      {
        cart.data.length> 0 
        ?
         cart?.data?.map((item) => (
          

        <div
          key={item.id}
          className="w-full max-w-4xl bg-white rounded-xl shadow-sm p-6 flex gap-6 items-center mb-2"
        >
          {/* LEFT IMAGE */}
          <div className="relative w-40 h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            <span className="absolute top-2 left-2 bg-green-500 text-black text-xs px-2 py-1 rounded-md">
              SAVE <br /> {item.discount_percentage}%
            </span>

            <img
              src={item.image}
              alt=""
              className="object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          
          <div className="flex-1 space-y-3">
            <p className="text-xs text-gray-400">{(item.qty)}</p>

            <h3 className="font-semibold text-gray-800">
              {item.name}
            </h3>

            <p className="text-red-500 font-semibold text-lg">
              {formatIndianCurrency((item?.final_price) *(item?.qty))}
            </p>

            <div className="inline-flex items-center border rounded-md overflow-hidden">
              <button  className="px-3 py-1 text-gray-500">-</button>
              <span className="px-4 py-1 text-sm">{item.qty}</span>
              <button  className="px-3 py-1 text-gray-500">+</button>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded">
                FREE SHIPPING
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              In stock
            </div>
          </div>
        

          {/* COLOR DOTS */}
          <div className="flex flex-col gap-2">
            <span className="w-5 h-5 rounded-full bg-gray-300"></span>
            <span className="w-5 h-5 rounded-full bg-pink-200"></span>
          </div>

           <button onClick={() => dispacher(deleteCart(item.id))} className='p-2 border '>Remove</button>

        </div>
      ))

        :
        
        
        <h2 className='text-2xl font-bold text-center '>Empty Cart</h2> 
    }
    </>
  )
}




