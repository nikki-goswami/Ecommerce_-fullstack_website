'use client'

import React from 'react'
import  {useDispatch, useSelector}  from 'react-redux'
import { addToCart, changeQuantity } from '@/redux/reducers/cartReducers'
import { axiosbaseURL } from '@/helper/helper'


export default function AddToCartButton(props) {

    const {data:cart_data} =useSelector((store)=>store.cart)
 const dispacher = useDispatch()

async function addToHandler(){
  if(props.usertoken != null){
    await axiosbaseURL.post("/cart/add_to_cart",{
      productId: props.id,
      userId: props.usertoken._id,
      flag: 1   // ✅ increase
    })
  }
  dispacher(addToCart({...props,usertoken:null}))
}



    const findItem= cart_data.find((cartItem)=>cartItem.id == props.id);
 
 
async function quantityHandler(id, flag) {
  try {
    if (props.usertoken != null) {
      await axiosbaseURL.post("/cart/add_to_cart", {
        productId: id,                 // ✅ ID JO FUNCTION SE AAYI
        userId: props.usertoken._id,
        flag
      });
    }

    // backend success ke baad UI update
    dispacher(changeQuantity({ id, flag }));

  } catch (error) {
    console.log("Quantity update failed", error);
  }
}




  return (
    <div className=' bg-white'>
        {
            findItem!= null ? (
            <div className='flex items-center gap-4'>
<button onClick={()=>quantityHandler(props.id,2)} className="mt-auto w-full py-1 rounded-xl bg-teal-600 text-white font-medium hover:bg-green-700 transition">-</button>
<h3>{findItem.qty}</h3>
<button onClick={()=>quantityHandler(props.id,1)} className="mt-auto w-full py-1 rounded-xl bg-teal-600 text-white font-medium hover:bg-green-700 transition">+</button>
</div> ) : (
<button onClick={addToHandler}className="mt-auto w-full py-2 rounded-xl bg-teal-600 text-white font-medium hover:bg-green-700 transition" >
 Add to Cart </button>

            )
        }
 
    </div>
    
  )
}


